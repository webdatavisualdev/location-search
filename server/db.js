var sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db.sqlite', (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }
    console.log('Connected to the database.')
});


module.exports = db