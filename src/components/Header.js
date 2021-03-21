import React from "react";
import styles from "../styles/HeaderStyles.module.css";

export default function Header() {
  return (
    <div>
      <div>
        <p className={styles.Title}>Latest Tweets</p>
      </div>
      <div>
        <div>
          <input type="text" />
          <button className={styles.TweetButton}>Tweet</button>
        </div>
      </div>
    </div>
  );
}
