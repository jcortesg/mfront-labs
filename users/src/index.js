import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { UserPage } from "./presentation/pages/UserPage.jsx";

const renderUsersApp = (container) => {
  const root = ReactDOM.createRoot(container);
  root.render(
      <UserPage />
  );
};

export default renderUsersApp;