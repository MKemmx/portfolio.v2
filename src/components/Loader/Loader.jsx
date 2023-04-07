import React from "react";
import "./loaderCss.css";

const Loader = () => {
  return (
    <div className="flex w-full  h-[60vh] items-center justify-center">
      <div class="loader">
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__ball"></div>
      </div>
    </div>
  );
};

export default Loader;
