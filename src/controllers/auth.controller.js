const authService = require('../services/auth.service')

async function login(req, res, next) {
  try {
    res.json(await authService.login(req.query.page))
  } catch (err) {
    console.error(`Error while login`, err.message)
    next(err)
  }
}

async function loginGoogle(req, res, next) {
  try {
    res.json(await authService.loginGoogle(req.query.page))
  } catch (err) {
    console.error(`Error while login Google`, err.message)
    next(err)
  }
}

async function register(req, res, next) {
  try {
    res.json(await authService.register(req.body))
  } catch (err) {
    console.error(`Error while register`, err.message)
    next(err)
  }
}

module.exports = {
  login,
  loginGoogle,
  register,
}
