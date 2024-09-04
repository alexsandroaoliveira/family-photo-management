import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Album, User, IApiClient } from "../types";
import { ApiClient } from "../services/api-client";
import { UserContext } from "../context/userContext";

const UserAlbums: React.FC = () => {
  const apiClient: IApiClient = new ApiClient();
  const { userId } = useParams<{ userId: string }>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [user, setUser] = useState<User>();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (userId) {
      const fetchAlbums = async () => {
        try {
          const data = await apiClient.getUserAlbums(parseInt(userId, 10));
          setAlbums(data);
        } catch (error) {
          console.error("Error fetching albums:", error);
          // Handle error
        }
      };

      const fetchUser = async () => {
        try {
          const data = await apiClient.getUserById(parseInt(userId, 10));
          setUser(data);
        } catch (error) {
          console.error("Error fetching albums:", error);
          // Handle error
        }
      };

      fetchUser();
      fetchAlbums();
    }
  }, [userId]);

  const handleDeleteAlbum = (albumId: number) => {
    apiClient.deleteAlbum(albumId);
  };

  return (
    <div>
      <h2>
        {user?.username} - {user?.email}
      </h2>
      <h3>Albuns:</h3>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
            {currentUser && currentUser.id === album.userId && (
              <button onClick={() => handleDeleteAlbum(album.id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
