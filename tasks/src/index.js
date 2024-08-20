import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const renderTasksApp = (container) => {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};

export default renderTasksApp;
