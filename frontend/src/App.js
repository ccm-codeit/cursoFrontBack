import "./styles/App.css";
import Tweet from "./components/Tweet";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
//TEST
function App() {
  const [tweetList, setTweetList] = useState([]); // lista de nuestras 'Opinion Cards'
  const [loadingMsg, setLoadingMsg] = useState("Loading tweets...");
  useEffect(() => {
    axios
      .get("http://localhost:3010/tweets")
      .then((results) => {
        console.log(results);
        setTweetList(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (tweet) => {
    // agrega un nuevo tweet a la lista de tweets y lo sube a la nube
    const Tweet = {
      username: "einarlop",
      tweet: tweet,
    };

    console.log("Posting..." + tweet);
    axios
      .post("http://localhost:3010/", Tweet)
      .then((response) => {
        console.log("Succesful update");
        console.log(response);
        setTweetList([Tweet, ...tweetList]);
      })
      .catch((err) => {
        console.log("There was an error:");
        console.dir(err);
      });
    //console.log(tweetList);
  };

  const onSearch = (query) => {
    console.log("Querying...", query);
    axios
      .get("http://localhost:3010/tweets/" + query)
      .then((results) => {
        console.log("Succesful \n " + results);
        setTweetList(results.data);
        if (results.data.length === 0) {
          setLoadingMsg("No tweets by " + "@" + query);
        }
      })
      .catch((err) => {
        console.log("There was an error:");
        console.dir(err);
      });
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Header onSubmit={onSubmit} onSearch={onSearch} />
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
