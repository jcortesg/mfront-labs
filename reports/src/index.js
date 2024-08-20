import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Componente principal para gestionar reportes
const ReportsApp = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulación de obtener reportes (normalmente de una API)
    setReports([
      { id: 1, title: "Report 1", data: "Data for report 1" },
      { id: 2, title: "Report 2", data: "Data for report 2" },
    ]);
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <h2>{report.title}</h2>
            <p>{report.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderReportsApp = (container) => {
  const root = ReactDOM.createRoot(container);
  root.render(<ReportsApp />);
};

export default renderReportsApp;