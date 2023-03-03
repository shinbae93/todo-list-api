const userService = require('../services/user.service')

async function getOne(req, res, next) {
  try {
    res.json(await userService.getOne(req.userId))
  } catch (err) {
    console.error(`Error while getting me`, err.message)
    next(err)
  }
}

async function update(req, res, next) {
  try {
    res.json(await userService.update(req.params.id, req.body))
  } catch (err) {
    console.error(`Error while updating me`, err.message)
    next(err)
  }
}

module.exports = {
  getOne,
  update,
}
