import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbumPhotos } from "../services/api";
import { Photo } from "../types";
import PhotoCard from './PhotoCard';

const AlbumPhotos: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    if (albumId) {
      const fetchPhotos = async () => {
        try {
          const data = await getAlbumPhotos(parseInt(albumId, 10));
          setPhotos(data);
        } catch (error) {
          console.error("Error fetching photos:", error);
          // Handle error
        }
      };
      fetchPhotos();
    }
  }, [albumId]);

  return (
    <div>
      <h2>Photos in Album {albumId}</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;
