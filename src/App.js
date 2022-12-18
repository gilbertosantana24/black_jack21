import "./App.css";
import { useState,useEffect } from "react";
import { Dealer } from "./Components/Dealer";
import { Buttons } from "./Components/Buttons";
import { Player } from "./Components/Player";
import { drawCard } from "./gameMethods/drawCard";
import { buildMaze } from "./gameMethods/buildMaze";

function App() {
  const [maze, setMaze] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerResult, setPlayerResult] = useState("");
  const [dealerResult, setDealerResult] = useState("");
  //Its true when we want to enable the new game button and disable the other ones
  const [lock, setLock] = useState(true);


  //Get the first card for the dealer once we have a maze in place
  useEffect(()=>{
    if(maze.length > 0){
      //Draw a card for the dealer
      var card = drawCard(maze,setMaze);
      //Assign it to the dealer
      setDealerScore(card.value);
    }
  },[maze])

  const handleNewGame = () => {
    //Build new maze
    setMaze(buildMaze());
    // Set the player and dealer score to 0
    setDealerScore(0);
    setPlayerScore(0);
    // Erase the player and dealer result
    setPlayerResult("");
    setDealerResult("");
    // Lock the buttons
    setLock(false);
  };

  const handleDrawCard = () => {
    //draw a card from maze
    var card = drawCard(maze, setMaze);

    //See if it passed 21
    if (playerScore + card.value > 21) {
      //If it did, game ends and player loses
      setPlayerResult("Player Busts");
      setDealerResult("Dealer Wins");
      setLock(true);
    }

    // Add it to the player score
    setPlayerScore((score) => {
      return card.value + score;
    });
  };

  const handleStand = () => {
    //Lock the buttons
    setLock(true);

    //Get all the cards the dealer will receive
    var dealerCards = [dealerScore];
    //Running dealer total
    var tot = dealerScore;
    //While the total is less than 17
    while (tot < 17) {
      //Draw a card
      const card = drawCard(maze, setMaze);
      //Add it to the list
      dealerCards.push(card.value);
      //Add it to the running total
      tot += card.value;
    }

     //Set the dealer score to the total
    setDealerScore(tot);

    //See if dealer busted
    if (tot > 21) {
      setPlayerResult("Player Wins!");
      setDealerResult("Dealer Busts");
    } else if (playerScore == tot) {
      setPlayerResult("Push!");
    } else if (playerScore > tot) {
      setPlayerResult("Player Wins!");
      setDealerResult("Dealer Lost");
    } else {
      setPlayerResult("You Lost");
      setDealerResult("Dealer Wins");
    }
   
  };

  return (
    <div className="App">
      <h1 className="title">Black Jack 21 </h1>
      <div className="play-area">
        <Buttons
          lock={lock}
          handleNewGame={handleNewGame}
          handleDrawCard={handleDrawCard}
          handleStand={handleStand}
        />
        <Dealer dealerScore={dealerScore} dealerResult={dealerResult} />
        <Player playerScore={playerScore} playerResult={playerResult} />

        {/* END OF PLAY AREA */}
      </div>
    </div>
  );
}

export default App;
