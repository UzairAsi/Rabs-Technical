import React from "react";
import classes from "./FirstSection.module.css";
import Svg from "../Header/Svg";

const FirstSection = () => {
  return (
    <div className={classes["main-content"]}>
      <div className={classes["left-div"]}>
        <h4>Online Education Courses</h4>
        <h5>"For Everyone"</h5>
        <br />
        <div className={classes["left-div-card"]}>
          <div className={classes["left-div-card-header"]}>
            <h5 style={{ padding: 0 }}>Book your free class now</h5>
            <div className={classes["card-description"]}>
              <h5>For Kids</h5>
              <span></span>
              <h5>For Adults (+18)</h5>
            </div>
          </div>
          <p>Select your child's grade/class in school</p>
          <div className={classes["table-div"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((elem) => (
              <div className={classes.table} key={elem}>
                <p>Class</p>
                <p>{elem}</p>
              </div>
            ))}
          </div>
          <button className={classes["book-btn"]}>
            <div>
              <Svg
                path="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
                span={false}
              />
              <p>Schedule a FREE Class</p>
            </div>
          </button>
        </div>
      </div>
      <div className={classes["center-div"]}></div>
      <div className={classes["right-div"]}>
        <img
          src="https://memorypower.rabsconnect.in/static/media/aboutCompany3.f43485b1fae3e053e22c.png"
          alt="First"
        />
        <img
          src="https://memorypower.rabsconnect.in/static/media/aboutCompany2.e45a8caefb46c9fa8ca9.png"
          alt="Second"
        />
        <img
          src="https://memorypower.rabsconnect.in/static/media/aboutCompany.8bd50eeabf90147ea66a.png"
          alt="Third"
        />
      </div>
    </div>
  );
};

export default FirstSection;
