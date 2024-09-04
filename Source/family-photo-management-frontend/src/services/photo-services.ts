import { IApiClient, IPhotoServices, Photo } from "../types";
import { ApiClient } from "../services/api-client";

export class PhotoServices implements IPhotoServices {
  deletePhoto(photoId: number) {
    this.apiClient.deletePhoto(photoId);
  }
  postAlbumPhoto = async (photo: Photo) => {
    await this.apiClient.postAlbumPhoto(photo);
  };

  fetchPhotos = async (albumId: number): Promise<Photo[]> => {
    try {
      return await this.apiClient.getAlbumPhotos(albumId);
    } catch (error) {
      console.error("Error fetching photos:", error);
      // Handle error
    }
    return [];
  };

  apiClient: IApiClient = new ApiClient(); //TODO - move to the constructor to be able to mock
}
