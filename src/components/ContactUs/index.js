import React from "react";
import classes from "./ContactUs.module.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const cards = ["All Courses", "Our teams", "Get to know us"];
  return (
    <div className={classes.main}>
      <div className={classes["secondary-header"]}>
        <div className={classes["main-container"]}>
          <div className={classes["contact-content"]}>
            <h3>Our teams are here to help</h3>
            <p>Questions, bug reports, feedback — we’re here for it all.</p>
          </div>
        </div>
      </div>
      <div className={classes["secondary-contact"]}>
        <div className={classes["main-container"]}>
          <div className={classes["card-container"]}>
            {cards.map((elem) => (
              <div className={classes.card} key={elem}>
                <div className={classes["content-box"]}>
                  <div>
                    <h4>{elem}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque maximus eros risus, eu blandit purus
                      consectetur et. Phasellus consequat justo sit amet nunc
                      malesuada mattis. Cras eget mi eu odio.
                    </p>
                    <Link className={classes["card-link"]}>
                      <span>Browse all courses</span>
                      <svg viewBox="0 0 13 20">
                        <polyline
                          path="0.5 19.5 3 19.5 12.5 10 3 0.5"
                          style={{ color: "rgb(0, 101, 255)" }}
                        ></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
