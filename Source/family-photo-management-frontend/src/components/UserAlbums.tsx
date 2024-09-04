import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Album, User, IAlbumServices, IUserServices } from "../types";
import { UserContext } from "../context/userContext";
import { AlbumServices } from "../services/album-services";
import { UserServices } from "../services/user-services";

const UserAlbums: React.FC = () => {
  const albumServices: IAlbumServices = new AlbumServices();
  const userServices: IUserServices = new UserServices();
  const { userId } = useParams<{ userId: string }>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [user, setUser] = useState<User>();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (userId) {
      userServices.fetchUser(parseInt(userId, 10)).then((data) => setUser(data));
      albumServices.fetchAlbums(parseInt(userId, 10)).then((data) => setAlbums(data));
    }
  }, [userId]);

  const handleDeleteAlbum = (albumId: number) => {
    albumServices.deleteAlbum(albumId);
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
