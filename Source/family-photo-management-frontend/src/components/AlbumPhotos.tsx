import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Album, Photo, IPhotoServices, IAlbumServices } from "../types";
import PhotoCard from "./PhotoCard";
import { PhotoServices } from "../services/photo-services";
import { AlbumServices } from "../services/album-services";

const AlbumPhotos: React.FC = () => {
  const photoServices: IPhotoServices = new PhotoServices();
  const albumServices: IAlbumServices = new AlbumServices();
  const { albumId } = useParams<{ albumId: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    if (albumId) {
      albumServices
        .fetchAlbum(parseInt(albumId, 10))
        .then((data) => setAlbum(data));

      photoServices
        .fetchPhotos(parseInt(albumId, 10))
        .then((data) => setPhotos(data));
    }
  }, [albumId]);

  return (
    <div>
      <h2>{album?.title}</h2>
      <div className="photo-grid">
        {album && photos.map((photo) => (
          <PhotoCard key={photo.id} album={album!} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;
