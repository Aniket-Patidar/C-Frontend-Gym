// components/LoadingPage.js

import React from "react";

const LoadingPage = () => {
  return (
    <div className="loadingContainer">
      <div className="loadingContent">
        <div className="loadingText">Loading...</div>
        <div className="loadingSpinner"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
