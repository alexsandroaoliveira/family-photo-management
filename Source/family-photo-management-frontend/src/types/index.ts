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
  deleteAlbum: (albumId: number) => Promise<undefined>;
  deletePhoto: (photoId: number) => Promise<undefined>;
}