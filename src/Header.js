// import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <FaBars className="icon" />
      </div>
      <div className="header-title">QuickTix</div>
      <div className="header-right">
        <FaSearch className="icon" />
      </div>
    </header>
  );
};

export default Header;
