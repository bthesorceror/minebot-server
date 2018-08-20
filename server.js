const express = require('express')
const http = require('http')
const fs = require('fs')
const path = require('path')

const app = express()
const server = new http.Server(app)

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  const filepath = path.join(__dirname, 'index.html')
  fs.createReadStream(filepath).pipe(res)
})

module.exports = server
