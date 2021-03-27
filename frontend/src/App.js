import "./styles/App.css";
import Tweet from "./components/Tweet";
import Header from "./components/Header";
import { useState } from "react";
import axios from "axios";
//TEST
function App() {
  const [tweetList, setTweetList] = useState([]); // lista de nuestras 'Opinion Cards'
  const [loadingMsg, setLoadingMsg] = useState("No tweets");

  const onSubmit = (tweet) => {
    // agrega un nuevo tweet a la lista de tweets y lo sube a la nube
    const Tweet = {
      username: "einarlop",
      tweet: tweet,
    };

    setTweetList([Tweet, ...tweetList]);

    console.log("Posting..." + tweet);
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Header onSubmit={onSubmit} />
        <div className="Comment-Section">
          <div>
            {tweetList.length !== 0 ? (
              <div>
                {tweetList.map((twt, index) => {
                  return (
                    <Tweet
                      username={twt.username}
                      tweet={twt.tweet}
                      posted={twt.posted}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="LoadingMsg">{loadingMsg}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
