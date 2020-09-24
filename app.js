const http = require('http')
const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const userRoutes = require('./routes/user')
const homeRoutes = require('./routes/home')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(userRoutes)
app.use(homeRoutes.router)

app.use((req, res, next) => {
	res.status(404).send('<h1>404 - Page not found!</h1>')
})

app.listen(5000, () => {
	console.log('Server is running on 5000 port')
})
