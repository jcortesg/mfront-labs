import React from 'react';
import { UserCard } from './UserCard.jsx';
import './UserList.css';

export const UserList = ({ users }) => (
  <div className="user-list">
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);