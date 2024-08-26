import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { UserList } from '../components/UserList.jsx';

export const UserPage = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList users={users} />
    </div>
  );
};