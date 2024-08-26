import React from 'react';

export const UserCard = ({ user }) => (
  <div className="user-card">
    <h3>{user.given_name} {user.family_name}</h3>
    <p>Email: {user.email}</p>
    <p>Username: {user.nickname}</p>
  </div>
);