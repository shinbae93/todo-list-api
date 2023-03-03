const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  accessToken: {
    type: String,
    required: true,
    trim: true,
  },
  refreshToken: {
    type: String,
    required: true,
    trim: true,
  },
})

const Token = mongoose.model('Token', tokenSchema)

module.exports = {
  Token,
}
