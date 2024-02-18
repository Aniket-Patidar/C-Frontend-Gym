// components/LoadingPage.js

import Image from "next/image";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="loadingContainer">
      <div className="loadingContent">
        <div className="loadingText">
          <div>
            <Image height={100} width={100} src="/images/loader.gif"></Image>
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
