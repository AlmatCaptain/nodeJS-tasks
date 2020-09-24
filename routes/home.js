const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const users = []

router.get('/', (req, res, next) => {
	res.render('home', { title: "Home Page" })
})

router.post('/addUser', (req, res, next) => {
	users.push({ name: req.body.name })
	res.redirect('/')
})

exports.router = router
exports.users = users