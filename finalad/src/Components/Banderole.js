import React from "react";
import "./Banderole.css";

import logo from "../assets/logo.png";

export default function banderole() {
  return (
    <div className="navbar">
      <div className="wave"></div>
      <img src={logo} className="logo" alt="logo" />
      <div className="wave wave--top"></div>
      <div className="infoBar">
        <div className="leftinfo">Prive: Blog Masonry 3 Columns</div>
        <div className="rightinfo"> Home / Prive: Blog Masonry 3 Columns</div>
      </div>
    </div>
  );
}
