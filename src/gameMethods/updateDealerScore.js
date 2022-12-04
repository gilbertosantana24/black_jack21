import { drawCard } from "./drawCard";
export const updateDealerScore = (
  setDealerScore,
  setBlocks,
  dealerScoreRef,
  maze,
  setMaze,
  playerScore,
  setPlayerBlock,
  setDealerBlock
) => {
  while (dealerScoreRef.current < 17) {
    var card = drawCard(maze, setMaze);
    dealerScoreRef.current += card.value;
    setDealerScore(dealerScoreRef.current);
  }
  setBlocks(playerScore, setPlayerBlock, dealerScoreRef.current, setDealerBlock);
};
