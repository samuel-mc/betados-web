import React from "react";

import "./style.css";

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="loading__content">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default Loading;
