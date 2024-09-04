import React, { useContext } from "react";
import { Photo, Album, IPhotoServices } from "../types";
import { UserContext } from "../context/userContext";
import { PhotoServices } from "../services/photo-services";

interface PhotoCardProps {
  album: Album;
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ album, photo }) => {
  const photoServices: IPhotoServices = new PhotoServices();
  const { currentUser } = useContext(UserContext);

  const handleDeleteAlbum = (photoId: number) => {
    photoServices.deletePhoto(photoId);
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
