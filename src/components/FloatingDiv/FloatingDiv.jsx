import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({classn,img, text1}) => {
  return (
    // darkMode
    <div className={`${classn}`}>
      <img src={img} alt="" />
      <span>
        {text1}
      </span>
    </div>
  );
};

export default FloatinDiv;
