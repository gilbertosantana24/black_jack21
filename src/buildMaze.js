const {buildDeck} = require("./methods/buildDeck");
const {shuffleDeck} = require("./methods/shuffleDeck");

function buildMaze(numOfDecks = 1){
    return shuffleDeck(buildDeck(numOfDecks));
}

module.exports = {
    buildMaze
}