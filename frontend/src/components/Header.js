import React from "react";
import styles from "../styles/HeaderStyles.module.css";
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi';
import profilePic from "../img/profilepic.jpg";

export default function Header() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Icon}>
        <AiOutlineTwitter/>
      </div>
      <div className={styles.InputBox}>
        <div>
          <p className={styles.Title}>Latest Tweets</p>
        </div>
        <div>
          <div className={styles.Row1}>
            <img className={styles.Img} src={profilePic}></img>
            <input type="text" className={styles.Input} placeholder="What's happening?"/>
          </div>
          <div className={styles.TweetButtonContainer}>
            <button className={styles.TweetButton}>Tweet</button>
          </div>
        </div>
      </div>
      <div className={styles.SearchBox}>
        <div className={styles.SearchBar}>
          <span className={styles.SearchIcon}><FiSearch/></span>
          <input className={styles.SearchInput} type="text" placeholder="Search Twitter"/>
        </div>
      </div>
    </div>
  );
}
