import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../services/api-client";
import { UserContext } from "../context/userContext";
import { Album, IApiClient } from "../types";

const AddPhotoForm: React.FC = () => {
  const apiClient: IApiClient = new ApiClient();
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<Album[]>();
  const [album, setAlbum] = useState<Album>();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const albunsData = await apiClient.getUserAlbums(currentUser?.id ?? 0);
        setAlbums(albunsData);
        setAlbum(albunsData[0] || null);
      } catch (error) {
        console.error("Error fetching users:", error);
        // TODO - Handle error
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    if (album) {
      event.preventDefault();
      await apiClient.postAlbumPhoto({
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
