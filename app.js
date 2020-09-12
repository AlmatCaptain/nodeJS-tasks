const http = require('http')
const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')

const userRoutes = require('./routes/user')
const homeRoutes = require('./routes/home')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(userRoutes)
app.use(homeRoutes)

app.use((req, res, next) => {
	res.status(404).send('<h1>404 - Page not found!</h1>')
})

app.listen(5000, () => {
	console.log('Server is running on 5000 port')
})
