import React, { createContext, useState, useEffect } from "react";
import { User, IApiClient } from "../types";
import { ApiClient } from "../services/api-client";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {}, // Default no-op function
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const apiClient: IApiClient = new ApiClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await apiClient.getUsers();
        setCurrentUser(users[0] || null); // Set the first user as default
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
