import React from "react";
import "./style.css";


function GbDeleteBtn(props) {
  return (
    <span className="Gbdelete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default GbDeleteBtn;