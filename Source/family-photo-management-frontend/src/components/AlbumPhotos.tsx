import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiClient } from "../services/api-client";
import { Album, Photo, IApiClient } from "../types";
import PhotoCard from "./PhotoCard";

const AlbumPhotos: React.FC = () => {
  const apiClient: IApiClient = new ApiClient();
  const { albumId } = useParams<{ albumId: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    if (albumId) {
      const fetchPhotos = async () => {
        try {
          const data = await apiClient.getAlbumPhotos(parseInt(albumId, 10));
          setPhotos(data);
        } catch (error) {
          console.error("Error fetching photos:", error);
          // Handle error
        }
      };

      const fetchAlbum = async () => {
        try {
          const data = await apiClient.getAlbumById(parseInt(albumId, 10));
          setAlbum(data);
        } catch (error) {
          console.error("Error fetching photos:", error);
          // Handle error
        }
      };

      fetchAlbum();
      fetchPhotos();
    }
  }, [albumId]);

  return (
    <div>
      <h2>{album?.title}</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} album={album!} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;
