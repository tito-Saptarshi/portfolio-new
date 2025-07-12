import React from "react";
import Ping from "./Ping";


const View = async () => {
  
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: 100</span>
      </p>
    </div>
  );
};

export default View;