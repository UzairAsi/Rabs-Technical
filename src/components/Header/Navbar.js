import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Svg from "./Svg";
import DropdownModal from "./DropdownModal";
import { favIcon, listItems } from "../../constant";

const Navbar = () => {
  const [modal, setModal] = useState({ visibility: false, option: "" });
  const [toggle, setToggle] = useState(false);
  const handleClick = (option) => {
    setModal((prevState) => ({
      visibility: !prevState.visibility,
      option,
    }));
    console.log(modal);
  };

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <nav className={classes.navbar}>
        {listItems.map((elem) =>
          elem.type === "link" ? (
            <Link
              to={elem.path}
              className={classes["list-item"]}
              key={elem.name}
            >
              <Svg path={elem.svgPath} />
              {elem.name}
            </Link>
          ) : (
            <button
              className={classes["list-item"]}
              onClick={() => handleClick(elem.name)}
              key={elem.name}
            >
              <Svg path={elem.svgPath} />
              {elem.name}
              {elem.dropdown && (
                <Svg path={elem.dropdownPath} classname={classes.option} />
              )}
            </button>
          )
        )}
        <div className={classes["button-div"]}>
          <a
            href="https://memorypowerbackenddashboard.rabs.support/register"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["list-item"]}
          >
            <Svg path="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z" />
            Join Class
          </a>
          <a
            href="https://memorypowerbackenddashboard.rabs.support/register"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["list-item"]}
          >
            <Svg path="M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
            Book A Free Trail
          </a>
        </div>
        {favIcon.map((elem, index) => (
          <Link
            to="/"
            className={`${classes["list-item"]} ${classes["fav-icon"]}`}
            key={index + Math.random().toString()}
          >
            <Svg span={false} path={elem} />
          </Link>
        ))}
        {modal.visibility && <DropdownModal />}
      </nav>
      <nav className={classes["navbar-mobile"]}>
        <button className={classes.toggle} onClick={handleToggle}>
          <Svg
            path="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            span={false}
          />
        </button>

        <div
          className={`${classes.overlay} ${
            toggle ? classes["overlay-open"] : ""
          }`}
          onClick={handleToggle}
        ></div>
        <div
          className={`${classes.drawer} ${
            toggle ? classes["drawer-open"] : ""
          }`}
        >
          <h6 className={classes["image-header"]}>
            <img
              src="https://memorypower.rabsconnect.in/static/media/favicon.2b604ffcd1a6e4804945.ico"
              alt="logo"
            />
            Memory power
          </h6>
          <hr />
          <ul>
            <Link to="/" className={classes["mobile-list-items"]}>
              <div className={classes["mobile-button-div"]}>
                <button className={classes["mobile-button"]}>
                  <Svg
                    span={false}
                    path="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"
                  />
                </button>
                <div className={classes["list-label"]}>
                  <span>Home</span>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/" className={classes["mobile-list-items"]}>
              <div className={classes["mobile-button-div"]}>
                <button className={classes["mobile-button"]}>
                  <Svg
                    span={false}
                    path="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18 2.18.99-2.18.99z"
                  />
                </button>
                <div className={classes["list-label"]}>
                  <span>About Us</span>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/" className={classes["mobile-list-items"]}>
              <div className={classes["mobile-button-div"]}>
                <button className={classes["mobile-button"]}>
                  <Svg
                    span={false}
                    path="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"
                  >
                    <path d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"></path>
                  </Svg>
                </button>
                <div className={classes["list-label"]}>
                  <span>Meet Founder</span>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/" className={classes["mobile-list-items"]}>
              <div className={classes["mobile-button-div"]}>
                <button className={classes["mobile-button"]}>
                  <Svg
                    span={false}
                    path="M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-4 1.8-1 .6-1-.6V3h2v9.23z"
                  />
                </button>
                <div className={classes["list-label"]}>
                  <span>Our Certificates</span>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/" className={classes["mobile-list-items"]}>
              <div className={classes["mobile-button-div"]}>
                <button className={classes["mobile-button"]}>
                  <Svg
                    span={false}
                    path="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"
                  />
                </button>
                <div className={classes["list-label"]}>
                  <span>Courses</span>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/contact-us" className={classes["mobile-list-items"]}>
              <div className={classes["mobile-button-div"]}>
                <button className={classes["mobile-button"]}>
                  <Svg
                    span={false}
                    path="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                  />
                </button>
                <div className={classes["list-label"]}>
                  <span>Contact Us</span>
                </div>
              </div>
            </Link>
            <hr />
          </ul>
          <hr />
          <div className={classes["join-button-div"]}>
            <a href="" target="_blank" className={classes["join-class-div"]}>
              <Svg path="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z" />
              Join Class
            </a>
            <a href="" target="_blank" className={classes["join-class-div"]}>
              <Svg path="M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
              Book a free trail
            </a>
          </div>
          <div className={classes["fav-icon-div"]}>
            {favIcon.map((elem, index) => (
              <Link
                to="/"
                className={`${classes["list-item"]} ${classes["fav-icon"]}`}
                key={index + Math.random().toString()}
              >
                <Svg span={false} path={elem} />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
