import React from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <header className={classes.header}>
        <div className={classes.container}>
          <div className={classes["logo-div"]}>
            <img
              src="https://memorypower.rabsconnect.in/static/media/logo.861aa9e8c50bf8c2a9f3.png"
              alt="logo"
            />
          </div>
          <Navbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
