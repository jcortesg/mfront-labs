import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// Componente principal para gestionar usuarios
const UsersApp = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  // Simulación de obtener usuarios (normalmente de una API)
  useEffect(() => {
    setUsers([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]);
  }, []);

  const handleAddUser = () => {
    const user = { id: Date.now(), name: newUser };
    setUsers([...users, user]);
    setNewUser("");
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <input
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Add new user"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

const renderUsersApp = (container) => {
  const root = ReactDOM.createRoot(container);
  root.render(<UsersApp />);
};

export default renderUsersApp;