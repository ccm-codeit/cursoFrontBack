import React from "react";
import styles from "../styles/Tweet.module.css";
import profilePic from "../img/profilepic.jpg";
import moment from 'moment';

function Tweet(props) {
  const username = props.username;
  const tweet = props.tweet;
  const posted = props.posted;

  return (
    <div className={styles.Wrapper}>
      <picture className={styles.ImgContainer}>
        <img className={styles.Img} src={profilePic} />
      </picture>

      <div className={styles.ContentContainer}>
        <b className={styles.Name}>Einar López</b>
        <p className={styles.Username}>{username}</p>
        <p className={styles.Date}>{moment(posted).fromNow(true)}</p>
        <p className={styles.Content}>
          {tweet}
        </p>
      </div>
    </div>
  );
}

export default Tweet;
