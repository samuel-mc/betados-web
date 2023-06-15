import React from "react";

import Sidebar from "./Sidebar";

import "./style.css";

const AdminTemplate = ({ children }) => {
  return (
    <main className="admin__main">
      <Sidebar />
      <div className="admin__body">
        {children}
      </div>
    </main>
  );
};

export default AdminTemplate;
