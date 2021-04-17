
  //Click function
  function mousePressed() {
    if (currentPlayer == human) {
      // Human make turn
      let i = floor(mouseX / w); //Coordinate (i,j) of the board array 
      let j = floor(mouseY / h);
      // If valid turn
      if (board[i][j] == '') {//If there is no value present at (i,j) 
        board[i][j] = human;//Fill the value with human marking 
        currentPlayer = ai;//Set current player to ai 
        bestMove();//ai turn, uses the minimax function to select its move
      }
    }
  }