const express = require('express')
const cors = require('cors')
const app = express()
const { mainLogic, checkWinner, setUserSymbol} = require('./logic')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/', (req, res) => {
	console.log(req.params)
	console.log(req.body)
	let board = req.body.board
	let winner = checkWinner(board)
	let move = mainLogic(board)
	let result = { winner: winner, move: move }
	console.log(result)
	return res.send(JSON.stringify(result))
})

app.post('/setUser', (req, res) => {
	let userSymbol = req.body.userSymbol
	console.log(`SET USER TO ${userSymbol}`)
	setUserSymbol(userSymbol)
	return res.send('OK')
})

app.listen(5000)
