const app = require('express')()
app.get('/', (req, res) => {
	return res.send('Hello worlds')
})

app.listen(5000)
