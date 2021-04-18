const app = require('express')()
const { mainLogic, checkWinner } = require('./logic')

app.post('/', (req, res) => {
	console.log(req.params)
	console.log(req.body)
	let board = req.body.board
	// let userSymbol = req.body.userSymbol
	let winner = checkWinner(board)
	let move = mainLogic(board)
	let result = { winner: winner, move: move }
	return res.send(JSON.stringify(result))
	// return res.send('Hello worlds')
})

app.listen(5000)
