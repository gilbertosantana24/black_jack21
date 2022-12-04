import "./App.css";
import { useState, useRef, useEffect } from "react";
import { buildMaze } from "./gameMethods/buildMaze";
import { drawCard } from "./gameMethods/drawCard";
import { startGame } from "./gameMethods/startGame";
import { setBlocks } from "./gameMethods/setBlocks";
import { updateDealerScore } from "./gameMethods/updateDealerScore";
import { updatePlayerScore } from "./gameMethods/updatePlayerScore";
import { Dealer } from "./Components/Dealer";

function App() {
  const [maze, setMaze] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerBlock, setPlayerBlock] = useState(<></>);
  const [dealerBlock, setDealerBlock] = useState(<></>);
  const [gameButtons, setGameButtons] = useState(false);
  const dealerScoreRef = useRef(0);

  return (
    <div className="App">
      <h1 className="title">Black Jack 21 </h1>
      <div className="play-area">
      <button className="New_btn"
        disabled={gameButtons}
        onClick={() =>
          startGame(
            setMaze,
            buildMaze,
            setPlayerScore,
            setDealerScore,
            setPlayerBlock,
            setDealerBlock,
            dealerScoreRef,
            setGameButtons
          )
        }
      >
        New Game
      </button>

      {/* USER CLICKABLE BUTTONS */}
      <div className="game_btns">
      <button className="draw_btn"
        disabled={!gameButtons}
        onClick={() => {
          updatePlayerScore(
            maze,
            setMaze,
            drawCard,
            setPlayerScore,
            playerScore,
            dealerScore,
            setBlocks,
            setDealerBlock,
            setPlayerBlock
          );
        }}
      >
        Draw Card
      </button>
      <button className="stand_btn"
        disabled={!gameButtons}
        onClick={() => {
          setGameButtons(false);
          updateDealerScore(
            setDealerScore,
            setBlocks,
            dealerScoreRef,
            maze,
            setMaze,
            playerScore,
            setPlayerBlock,
            setDealerBlock
          );
        }}
      >
        Stand
      </button>
      </div> {/* END OF USER CLICKABLE BUTTONS */} 
      
      {/* PLAY AREA */}
      <h2 className="player_title">Player</h2>
      <>{playerScore}</>
      <>{playerBlock}</>
      <h2 className="dealer_title">Dealer</h2>
      <Dealer score={dealerScore}></Dealer>
      <>{dealerBlock}</> {/* END OF PLAY AREA */}


      </div>
    </div>
  );
}

export default App;
