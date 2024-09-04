import React from 'react';
import { Photo } from '../types'; // Import your Photo type

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <div className="photo-title">{photo.title}</div>
    </div>
  );
};

export default PhotoCard;