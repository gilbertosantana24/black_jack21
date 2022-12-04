const {cardEnum} = require("./cardSchema.js")
const cardSchema = new cardEnum()

function buildDeck(numOfDecks = 1, deck = []){
    for(let thisValue in cardSchema.value){
        for(let thisShape in cardSchema.shape){
            deck.push({
                shape:cardSchema.shape[thisShape],
                value:cardSchema.value[thisValue]
            });
        }
    }

    if(numOfDecks == 1){
        return deck
    }
    else{
        return buildDeck(numOfDecks-1,deck)
    }

}

module.exports = {buildDeck};