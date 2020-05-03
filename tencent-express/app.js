const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello Express')
})
app.get('/express', function(req, res) {
  res.send('Express')
})
app.get('/express1', function(req, res) {
  res.send('Express1')
})

// don't forget to export!
module.exports = app