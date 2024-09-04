import { IApiClient, IAlbumServices, Album } from "../types";
import { ApiClient } from "../services/api-client";

export class AlbumServices implements IAlbumServices {
  fetchAlbum = async (albumId: number): Promise<Album | undefined> => {
    try {
      return await this.apiClient.getAlbumById(albumId);
    } catch (error) {
      console.error("Error fetching photos:", error);
      // Handle error
    }

    return undefined;
  };

  deleteAlbum(albumId: number): unknown {
    throw new Error("Method not implemented.");
  }

  fetchAlbums = async (userId: number): Promise<Album[]> => {
    try {
      return await this.apiClient.getUserAlbums(userId);
    } catch (error) {
      console.error("Error fetching albums:", error);
      // Handle error
    }

    return [];
  };

  apiClient: IApiClient = new ApiClient(); //TODO - move to the constructor to be able to mock
}
