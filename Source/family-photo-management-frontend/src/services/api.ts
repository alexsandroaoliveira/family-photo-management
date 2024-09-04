import axios from 'axios';
import { User, Album, Photo } from '../types';

const BASE_URL = 'http://localhost:3001';

// --- Users ---
export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

// --- Albums ---
export const getUserAlbums = async (userId: number): Promise<Album[]> => {
  const response = await axios.get(`${BASE_URL}/users/${userId}/albums`);
  return response.data;
};

// --- Photos ---
export const getAlbumPhotos = async (albumId: number): Promise<Photo[]> => {
  const response = await axios.get(`${BASE_URL}/albums/${albumId}/photos`);
  return response.data;
};

// ... (Add functions for create, update, delete for photos and albums)
