export const updatePlayerScore = (maze, setMaze,drawCard,setPlayerScore,playerScore,dealer,setBlocks,setDealerBlock,setPlayerBlock) => {
    const card = drawCard(maze, setMaze);
    setPlayerScore(() => {
      if (playerScore + card.value <= 21) {
        return playerScore + card.value;
      } else {
        setBlocks(playerScore, setPlayerBlock, dealer, setDealerBlock);
        return playerScore + card.value;
      }
    });
  };