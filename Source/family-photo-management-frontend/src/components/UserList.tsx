import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, IApiClient } from "../types";
import { ApiClient } from "../services/api-client";

const UserList: React.FC = () => {
  const apiClient: IApiClient = new ApiClient();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiClient.getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error (e.g., display error message)
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}/albums`}>
              {user.username} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
