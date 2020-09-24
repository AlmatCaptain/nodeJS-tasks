const path = require('path')

const express = require('express')

const rootDir = require('../util/path')
const homeData = require('./home');

const router = express.Router()

router.get('/users', (req, res, next) => {
	res.render('users', { users: homeData.users, title: "Users Page" })
})

module.exports = router
