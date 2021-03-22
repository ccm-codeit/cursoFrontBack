import "./styles/App.css";
import Tweet from "./components/Tweet";
import Header from "./components/Header";
import { useState } from "react";
import axios from "axios";
//TEST
function App() {
  const [tweet, setTweet] = useState("");

  const [tweetList, setTweetList] = useState([]); // lista de nuestras 'Opinion Cards'

  const handleOnChange = (e) => {
    // manejador de cambios en input
    /*setCard({
      ...card,
      [e.target.name]: e.target.value,
    });*/
  };

  const handleOnDelete = (index) => {
    /*
    cards.filter(() => {
      return setCards(cards.filter((card, i) => i !== index));
    });
    */
  };

  const onSubmit = (tweet) => {
    // agrega un nuevo tweet a la lista de tweets y lo sube a la nube

    const Tweet = {
      username: "einarlop",
      tweet: tweet,
    };

    console.log(tweet);
    axios
      .post("http://localhost:3010/", Tweet)
      .then((response) => {
        console.log("Succesful update");
        console.log(response);
      })
      .catch();
    //console.log(tweetList);
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Header onSubmit={onSubmit} />
        <div className="Comment-Section">
          <div>
            {/* {cards.map((card, index) => {
              return (
                <Tweet
                  title={card.title}
                  description={card.description}
                  onDelete={() => handleOnDelete(index)}
                />
              );
            })} */}
            <Tweet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
