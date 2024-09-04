import { IUserServices, User, IApiClient } from "../types";
import { ApiClient } from "../services/api-client";

export class UserServices implements IUserServices {
  fetchUser = async (userId: number): Promise<User | undefined> => {
    try {
      return await this.apiClient.getUserById(userId);
    } catch (error) {
      console.error("Error fetching albums:", error);
      // TODO - Handle error
    }

    return undefined;
  };

  fetchUsers = async (): Promise<User[]> => {
    try {
      return this.apiClient.getUsers();
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle error (e.g., display error message)
    }

    return [];
  };

  apiClient: IApiClient = new ApiClient(); //TODO - move to the constructor to be able to mock
}
