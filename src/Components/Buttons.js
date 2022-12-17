export function Buttons(props) {
 return <>
    <button
    disabled = {!props.lock}
      onClick={() => {
        props.handleNewGame();
      }}
    >
      New Game
    </button>
    <button
    disabled={props.lock}
      onClick={() => {
        props.handleDrawCard();
      }}
    >
      Draw Card
    </button>
    <button
    disabled={props.lock}
      onClick={() => {
        props.handleStand();
      }}
    >
      Stand
    </button>
  </>;
}
