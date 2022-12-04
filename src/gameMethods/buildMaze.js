const {buildDeck} = require("../cardMethods/buildDeck");
const {shuffleDeck} = require("../cardMethods/shuffleDeck");

function buildMaze(numOfDecks = 1){
    return shuffleDeck(buildDeck(numOfDecks));
}

module.exports = {
    buildMaze
}