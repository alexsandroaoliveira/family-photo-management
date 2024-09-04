import React, { useContext } from "react";
import { Photo, IApiClient, Album } from "../types";
import { UserContext } from "../context/userContext";
import { ApiClient } from "../services/api-client";

interface PhotoCardProps {
  album: Album;
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ album, photo }) => {
  const apiClient: IApiClient = new ApiClient();
  const { currentUser } = useContext(UserContext);

  const handleDeleteAlbum = (photoId: number) => {
    apiClient.deletePhoto(photoId);
  };
  return (
    <div className="photo-card">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <div className="photo-title">{photo.title}</div>
      {currentUser && currentUser.id === album.userId && (
        <button onClick={() => handleDeleteAlbum(album.id)}>Delete</button>
      )}
    </div>
  );
};

export default PhotoCard;
