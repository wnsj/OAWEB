'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	API_HOST:'"http://172.16.66.248:8080"',
	// API_HOST:'"http://172.16.6.78:11119/oa"',
})
