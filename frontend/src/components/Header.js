import React, { useState, useEffect } from "react";
import styles from "../styles/HeaderStyles.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import profilePicDog from "../img/profilepicdog.jpg";
import profilePicCat from "../img/profilepiccat.jpeg";
import profilePicTurtle from "../img/profilepicturtle.jpeg";
import profilePicDuck from "../img/profilepicduck.jpeg";
import profilePicRabbit from "../img/profilepicrabbit.jpeg";

export default function Header(props) {
  const [tweet, setTweet] = useState("");

  const handleOnChange = (e) => {
    // manejador de cambios en input
    setTweet(e.target.value);
  };

  const onSubmit = props.onSubmit;


  return (
    <div className={styles.Wrapper}>
      <div className={styles.Icon}>
        <AiOutlineTwitter />
      </div>
      <div className={styles.InputBox}>
        <div>
          <p className={styles.Title}>Latest Tweets</p>
        </div>
        <div>
          <div className={styles.Row1}>
            <img className={styles.Img} src={profilePicDog}></img>
            <input
              type="text"
              className={styles.Input}
              placeholder="What's happening?"
              value={tweet}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.TweetButtonContainer}>
            <button
              className={styles.TweetButton}
              onClick={() => {
                setTweet("");
                onSubmit(tweet);
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className={styles.SearchBox}>
        <div className={styles.SearchBar}>
          <span
            className={styles.SearchIcon}
            onClick={() => {
              console.log("Buscando...");
            }}
          >
            <FiSearch />
          </span>
          <input
            className={styles.SearchInput}
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
}
