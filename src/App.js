import "./App.css";
import { useState, useRef, useEffect } from "react";
import { buildMaze } from "./buildMaze";
import { drawCard } from "./drawCard";

const startGame = (
  setMaze,
  buildMaze,
  setPlayerScore,
  setDealerScore,
  setPlayerBlock,
  setDealerBlock
) => {
  setMaze(buildMaze())
  
    setPlayerScore(0);
    setDealerScore(0);
    setPlayerBlock(<></>);
    setDealerBlock(<></>);
};

function App() {
  const [maze, setMaze] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerBlock, setPlayerBlock] = useState(<></>);
  const [dealerBlock, setDealerBlock] = useState(<></>);


  const setBlocks = (winner, setWinnerBlock, loser, setLoserBlock) => {
    setWinnerBlock(() => {
      return <h1>{winner} Wins!</h1>;
    });
    setLoserBlock(() => {
      return <h1>{loser} Loses!</h1>;
    });
  };


  const updatePlayerScore = (maze, setMaze) => {
    const card = drawCard(maze, setMaze);
    setPlayerScore(()=>{
      if (playerScore + card.value <= 21 ){
      return playerScore + card.value;
      } else{
        setBlocks("Dealer", setDealerBlock, "Player", setPlayerBlock)
        return playerScore + card.value;
      }
    }
    
  )};

    useEffect(() => {
      
     
    },[dealerScore])

  const updateDealerScore = (maze, setMaze) => {
      const card = drawCard(maze,setMaze);
      setDealerScore(dealerScore + card.value);
  };


  return (
    <div className="App">
      <h1 className="title">Black Jack 21 </h1>
      <button
        onClick={() =>
          startGame(
            setMaze,
            buildMaze,
            setPlayerScore,
            setDealerScore,
            setPlayerBlock,
            setDealerBlock
          )
        }
      >
        New Game
      </button>
      <button onClick={() => {
        updatePlayerScore(maze, setMaze)
      }}>
        Draw Card
      </button>
      <h2>Player</h2>
      <>{playerScore}</>
      <>{playerBlock}</>
      <h2>Dealer</h2>
      <>{dealerScore}</>
      <>{dealerBlock}</>
      <h2>Make dealer play</h2>
      <button onClick={()=>updateDealerScore(maze,setMaze)}></button>
    </div>
  );
}

export default App;
