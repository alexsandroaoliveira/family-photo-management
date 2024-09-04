import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserAlbums } from "../services/api";
import { Album } from "../types";

const UserAlbums: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (userId) {
      const fetchAlbums = async () => {
        try {
          const data = await getUserAlbums(parseInt(userId, 10));
          setAlbums(data);
        } catch (error) {
          console.error("Error fetching albums:", error);
          // Handle error
        }
      };

      fetchAlbums();
    }
  }, [userId]);

  return (
    <div>
      <h2>Albums for User {userId}</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
