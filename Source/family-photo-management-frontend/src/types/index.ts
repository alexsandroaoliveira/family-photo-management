export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IApiClient {
  getUsers: () => Promise<User[]>;
  getUserById: (userId: number) => Promise<User | undefined>; 
  getUserAlbums: (userId: number) => Promise<Album[]>;
  getAlbumById: (albumId: number) => Promise<Album>;
  getAlbumPhotos: (albumId: number) => Promise<Photo[]>;
  postAlbumPhoto: (photo: Photo) => Promise<Photo>;
  deleteAlbum: (albumId: number) => Promise<undefined>; // TODO - add return/error handling
  deletePhoto: (photoId: number) => Promise<undefined>;  // TODO - add return/error handling
}

export interface IUserServices {
  fetchUser(userId: number): Promise<User | undefined>;
  fetchUsers(): Promise<User[]>;
}

export interface IAlbumServices {
  fetchAlbum(albumId: number): Promise<Album | undefined>;
  deleteAlbum(albumId: number): unknown; // TODO - add return/error handling
  fetchAlbums(userId: number): Promise<Album[]>;
}

export interface IPhotoServices {
  deletePhoto(photoId: number): unknown;
  postAlbumPhoto(photo: Photo): unknown; // TODO - add return/error handling
  fetchPhotos(albumId: number): Promise<Photo[]>;  
}

