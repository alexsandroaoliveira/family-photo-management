import axios from "axios";
import { User, Album, Photo, IApiClient } from "../types";

export class ApiClient implements IApiClient {
  BASE_URL = "http://localhost:3001";

  // --- Users ---
  getUsers = async (): Promise<User[]> => {
    const response = await axios.get(`${this.BASE_URL}/users`);
    return response.data;
  };

  getUserById = async (userId: number): Promise<User> => {
    const response = await axios.get(`${this.BASE_URL}/users/${userId}`);
    return response.data;
  };

  // --- Albums ---
  getUserAlbums = async (userId: number): Promise<Album[]> => {
    const response = await axios.get(`${this.BASE_URL}/users/${userId}/albums`);
    return response.data;
  };

  getAlbumById = async (albumId: number): Promise<Album> => {
    const response = await axios.get(`${this.BASE_URL}/albums/${albumId}`);
    return response.data;
  };

  // --- Photos ---
  getAlbumPhotos = async (albumId: number): Promise<Photo[]> => {
    const response = await axios.get(
      `${this.BASE_URL}/albums/${albumId}/photos`
    );
    return response.data;
  };

  postAlbumPhoto = async (photo: Photo): Promise<Photo> => {
    const response = await axios.post(`${this.BASE_URL}/photos`, photo);
    return response.data;
  };

  deleteAlbum = async (albumId: number): Promise<undefined> => {
    await axios.delete(`${this.BASE_URL}/albums/${albumId}`);
    return;
  };

  deletePhoto = async (photoId: number): Promise<undefined> => {
    await axios.delete(`${this.BASE_URL}/photos/${photoId}`);
    return;
  };
}
