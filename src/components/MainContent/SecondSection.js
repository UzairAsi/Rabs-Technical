import React, { useEffect, useState } from "react";

import { getDatabase, ref, get } from "firebase/database";
import firebase from "../../firebaseconfig";
import classes from "./FirstSection.module.css";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  const [courseData, setCourseData] = useState([]);
  //   const [data, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(firebase);
        const dataRef = ref(db, "Services");
        const snapshot = await get(dataRef);
        const result = snapshot.val();
        const dataArray = Object.values(result);
        setCourseData(dataArray);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  console.log(courseData);

  return (
    <div
      className={classes["main-content"]}
      style={{
        background: `url('https://memorypower.rabsconnect.in/static/media/slide.97f0fa79f7ee684664e2.png')`,
      }}
    >
      <div className={styles["main-div"]}>
        <h4>Services we offer ?</h4>
        <br />
        <div className={styles["card-div"]}>
          <div className={styles["card-container"]}>
            {courseData.map((elem) => (
              <div className={styles.card} key={elem.description}>
                <img src={elem.imageUrl} alt={elem.name} />
                <div>
                  <h3>{elem.name}</h3>
                  <p>{elem.description}</p>
                  <button className={styles["card-btn"]}>
                    Book Free Trial Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
