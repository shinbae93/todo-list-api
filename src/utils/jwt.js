function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

function generateRefreshToken() {}

function decodeToken(token) {}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  decodeToken,
}
