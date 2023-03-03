const mongoose = require('mongoose')
const dbConfig = require('../configs/db.config')

function connectToDb() {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_HOST}/?retryWrites=true&w=majority`,
    dbConfig
  )
}

module.exports = {
  connectToDb,
}
