import React from "react";
import styles from "../styles/Tweet.module.css";
import profilePic from "../img/profilepic.jpg";
function Tweet(props) {
  return (
    <div className={styles.Wrapper}>
      <picture className={styles.ImgContainer}>
        <img className={styles.Img} src={profilePic} />
      </picture>

      <div className={styles.ContentContainer}>
        <b className={styles.Name}>Einar López</b>
        <p className={styles.Username}>EinarLop</p>
        <p className={styles.Date}>5min</p>
        <p className={styles.Content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
  );
}

export default Tweet;
