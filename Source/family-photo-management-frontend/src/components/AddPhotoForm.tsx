import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Album, IAlbumServices, IPhotoServices } from "../types";
import { PhotoServices } from "../services/photo-services";
import { AlbumServices } from "../services/album-services";

const AddPhotoForm: React.FC = () => {
  const photoServices: IPhotoServices = new PhotoServices();
  const albumServices: IAlbumServices = new AlbumServices();
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<Album[]>();
  const [album, setAlbum] = useState<Album>();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      albumServices.fetchAlbums(currentUser.id).then((data) => {
        setAlbums(data);
        setAlbum(data[0] || null);
      });
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    if (album) {
      event.preventDefault();
      await photoServices.postAlbumPhoto({
        id: 0,
        albumId: album?.id ?? 0,
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl,
      });

      navigate(`/albums/${album?.id}/photos`);
    } else {
      // TODO - Error msg
    }
  };

  const handleAlbumChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAlbumId = parseInt(event.target.value, 10);
    const selectedAlbum =
      albums?.find((album) => album.id === selectedAlbumId) || null;
    if (selectedAlbum) {
      setAlbum(selectedAlbum);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="albumId">Album:</label>
        <select
          id="album-select"
          value={album?.id || ""}
          onChange={handleAlbumChange}
        >
          <option value="">Select Album</option>
          {albums?.map((album) => (
            <option key={album.id} value={album.id}>
              {album.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="url">url:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="thumbnailUrl">thumbnailUrl:</label>
        <input
          type="text"
          id="thumbnailUrl"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </div>

      <button type="submit">Add Photo</button>
    </form>
  );
};

export default AddPhotoForm;
