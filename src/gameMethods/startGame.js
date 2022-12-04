export const startGame = (
  setMaze,
  buildMaze,
  setPlayerScore,
  setDealerScore,
  setPlayerBlock,
  setDealerBlock,
  dealerScoreRef,
  setGameButtons
) => {
  setMaze(buildMaze());

  setPlayerScore(0);
  setDealerScore(0);
  setPlayerBlock(<></>);
  setDealerBlock(<></>);
  dealerScoreRef.current = 0;
  setGameButtons(true)
};
