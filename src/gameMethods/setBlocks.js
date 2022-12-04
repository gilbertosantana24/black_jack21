export const setBlocks = (player, setPlayerBlock, dealer, setDealerBlock) => {
console.log("i made it")
//Tie
    if(player == dealer){
      setPlayerBlock(
        <h2>Tie</h2> 
       
      )
    }

    //Check if player passed
    else if(player > 21){
      setPlayerBlock(
        <h2>Player Loses!</h2>
      )
      setDealerBlock(
        <h2>Dealer Wins!</h2>
      )
    }
    //Check if dealer passed
    else if(dealer > 21){
      setPlayerBlock(
        <h2>Player Wins!</h2>
      )
      setDealerBlock(
        <h2>Dealer Loses!</h2>
      )
    }

    //Check if player beat dealer
    else if (player > dealer){
      setPlayerBlock(
        <h2>Player Wins!</h2>
      )
      setDealerBlock(
        <h2>Dealer Loses!</h2>
      )
    }
    else if (dealer > player){
      setPlayerBlock(
        <h2>Player Loses!</h2>
      )
      setDealerBlock(
        <h2>Dealer Wins!</h2>
      )
    }

    

  }