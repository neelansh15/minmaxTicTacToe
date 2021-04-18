let computer = 'O'
let user = 'X'
let count = 0

const setUserSymbol = userSymbol => {
	user = userSymbol
	computer = userSymbol == 'X' ? 'O' : 'X'
}

function getAvailableMoves(board) {
	let lengthOfBoard = 3
	let moves = []
	for (let row = 0; row < lengthOfBoard; row++) {
		for (let column = 0; column < lengthOfBoard; column++) {
			if (board[row][column] === '') {
				moves.push({ row, column })
			}
		}
	}
	return moves
}

function checkWinner(board) {
	console.log('BOARD')
	console.log(board)
	// The function return the the symbol of the wining user
	// if returns -1 => no current winner
	// inputs=> board: this the current state of board
	let boardLength = 3
	// row or column check
	for (let i = 0; i < board.length; i++) {
		if (
			((board[i][0] === board[i][1] && board[i][1] === board[i][2]) ||
				(board[0][i] === board[1][i] && board[1][i] === board[2][i])) &&
			board[i][i] !== ''
		) {
			//board[i][i] is the intersection of row and column which satisfies the win condition and helps the combining the two if conditions(for row and column)
			console.log('end condition ROW AND COLUMN')
			console.log(i)
			console.log(board[i][0], board[0][i])
			return board[i][i]
		}
	}
	// diagonal check
	if (
		((board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
			(board[0][2] == board[1][1] && board[1][1] == board[2][0])) &&
		board[1][1] !== ''
	) {
		console.log('end condition DIAGONAL')
		//board[1][1] is the intersection of row and column which satisfies the win condition and helps the combining the two if conditions(for row and column)
		return board[1][1]
	}
	console.log('NULL')
	// if (getAvailableMoves()) {
	// 	return 'tie'
	// }
	return null
}

let scores = {
	computer: 10,
	user: -10,
	tie: 0,
}
function minMax(board, maximize) {
	// count++
	// if (count > 9) {
	// 	return
	// }
	// this will return the best moves (for ai) and the worst moves (for user)
	// inputs=> board:current state of the board, maximize: bool -> true for computer, false for user

	let result = checkWinner(board)
	if (result !== null) {
		return scores[result]
	}

	if (maximize) {
		// get best moves for computer
		let bestScore = -1000 //Any score will be better than this score
		let moves = getAvailableMoves(board)
		for (let i = 0; i < moves.length; i++) {
			let row = moves[i].row
			let column = moves[i].column
			board[row][column] = computer

			console.log(board)

			let score = minMax(board, false) //predicting for user if computer makes the move at the current row and column
			board[row][column] = ''
			bestScore = Math.max(score, bestScore)
		}
		return bestScore
	} else {
		let bestScore = 1000
		let moves = getAvailableMoves(board)
		for (let i = 0; i < moves.length; i++) {
			let row = moves[i].row
			let column = moves[i].column
			board[row][column] = user
			let score = minMax(board, true) //predicting for computer if user makes the move at the current row and column
			board[row][column] = ''
			bestScore = Math.min(score, bestScore)
		}
		return bestScore
	}
}

// -------------incomplete--------------------

function bestMove(board) {
	// When the computer is making move we will maximize the bestScore
	let bestScore = -1000 //Any score will be better than this score
	let moves = getAvailableMoves(board) // this represents the possible moves for each state
	let bestMove
	for (let i = 0; i < moves.length; i++) {
		let row = moves[i].row
		let column = moves[i].column
		board[row][column] = computer
		let score = minMax(board, false)
		// given that computer makes the move at current row and column, we need to check if user is benefited by checking for maxmizing condition as false
		// if user is benefited score will be negative
		board[row][column] = ''
		if (score > bestScore) {
			bestScore = score
			bestMove = { row, column }
		}
	}
	return bestMove
	// board[move.row][move.column] = computer
	// current_player = user
}

// always check winner before next round starts

// Driver code

const mainLogic = board => {
	let result = checkWinner(board)
	if (result !== null) {
		console.log(result)
		return null
	}
	let move = bestMove(board)
	console.log(move.row, move.column)
	return move
}

module.exports = {
	checkWinner,
	mainLogic,
	setUserSymbol,
}
