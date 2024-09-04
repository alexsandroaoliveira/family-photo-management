import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ApiClient } from "../services/api-client";
import { User, IApiClient } from "../types";
import { UserContext } from "../context/userContext";

const Navigation: React.FC = () => {
  const apiClient: IApiClient = new ApiClient();
  const [users, setUsers] = useState<User[]>([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiClient.getUsers();
        setUsers(data);
        setCurrentUser(data[0] || null);
      } catch (error) {
        console.error("Error fetching users:", error);
        // TODO - Handle error
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = parseInt(event.target.value, 10);
    const selectedUser =
      users.find((user) => user.id === selectedUserId) || null;
    setCurrentUser(selectedUser);
  };

  return (
    <nav>
      <h2>Family Photo Album Management</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Photo</Link>
        </li>
        <li className="dropdown">
          <label htmlFor="user-select">Current User:</label>
          <select
            id="user-select"
            value={currentUser?.id || ""}
            onChange={handleUserChange}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
