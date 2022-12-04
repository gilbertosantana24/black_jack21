function drawCard(maze,setMaze){

    const card = maze.pop()
    setMaze(maze);
    return card;

}

module.exports = {
    drawCard
}