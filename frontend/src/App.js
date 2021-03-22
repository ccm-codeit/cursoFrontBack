import "./styles/App.css";
import Tweet from "./components/Tweet";
import Header from "./components/Header";
import { useState } from "react";
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

  const onSubmit = (e) => {
    // agrega una nueva card a la lista de cards
    e.preventDefault(); // evita que recargue la página
    //setCards((cards) => [...cards, card]);
    console.log(tweetList);
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Header />
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
