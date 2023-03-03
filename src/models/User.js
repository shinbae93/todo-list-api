const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    googleId: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = {
  User,
}
