import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../services/api';
import { User } from '../types';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
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
      <h1>Family Members</h1>
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