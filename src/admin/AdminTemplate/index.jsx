import React from "react";

import Sidebar from "./Sidebar";

import "./style.css";

const AdminTemplate = ({ children }) => {
  return (
    <main className="admin__main">
      <Sidebar />
      {children}
    </main>
  );
};

export default AdminTemplate;
