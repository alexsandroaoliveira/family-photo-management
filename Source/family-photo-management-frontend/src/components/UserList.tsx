import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, IUserServices } from "../types";
import { UserServices } from "../services/user-services";

const UserList: React.FC = () => {
  const userServices: IUserServices = new UserServices();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userServices.fetchUsers().then((data) => setUsers(data));
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
