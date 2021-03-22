import "./styles/App.css";
import Tweet from "./components/Tweet";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
//TEST
function App() {
  const [tweetList, setTweetList] = useState([]); // lista de nuestras 'Opinion Cards'
  
  useEffect(() => {
    axios.get("http://localhost:3010/feed")
      .then(results =>{
        console.log(results)
        setTweetList(results.data);
      } 
    ).catch(err => { 
      console.log(err)
    })
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
      })
      .catch(err => {
        console.log("There was an error:");
        console.dir(err);
      });
    //console.log(tweetList);
  };

  const onSearch = (query) => {
    if (query==="") {
      return;
    }
    console.log("Querying...", query);
    axios.get('http://localhost:3010/tweets/' + query)
    .then(results => {
      console.log("Succesful \n " + results);
      setTweetList(results);
    })
    .catch(err => {
      console.log("There was an error:");
      console.dir(err);
    })
  }


  
  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Header onSubmit={onSubmit} onSearch={onSearch}/>
        <div className="Comment-Section">
          <div>
            {tweetList ? <div>
            {tweetList.map((twt, index) => {
              return (
                <Tweet
                  username={twt.username}
                  tweet={twt.tweet}
                  posted={twt.posted}
                />
              );
            })}</div> : <p>LOADING TWEETS...</p> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
