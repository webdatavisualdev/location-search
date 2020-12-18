// Create express app
var express = require('express')
var app = express()
var db = require('./db.js')

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT))
})

// Endpoints
app.get('/locations', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (!req.query.q || req.query.q.length < 2) {
    return res.json({
      success: false,
      message: 'Search query is missing or query string should contain 2 characters at least.'
    })
  }
  var sql = `select name, latitude, longitude from locations where name like '%${req.query.q}%'`
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message
      })
    }
    return res.json({
      success: true,
      data: rows
    })
  })
})

// Default response for any other request
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API doesn\'t exist'
  })
})