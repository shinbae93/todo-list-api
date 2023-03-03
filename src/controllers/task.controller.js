const taskService = require('../services/task.service')

async function getOne(req, res, next) {
  try {
    res.json(await taskService.getOne(req.query.id))
  } catch (err) {
    console.error(`Error while getting one task`, err.message)
    next(err)
  }
}

async function getMany(req, res, next) {
  try {
    res.json(await taskService.getMany())
  } catch (err) {
    console.error(`Error while getting many tasks`, err.message)
    next(err)
  }
}

async function create(req, res, next) {
  try {
    res.json(await taskService.create(req.body))
  } catch (err) {
    console.error(`Error while creating task`, err.message)
    next(err)
  }
}

async function update(req, res, next) {
  try {
    res.json(await taskService.update(req.params.id, req.body))
  } catch (err) {
    console.error(`Error while updating task`, err.message)
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    res.json(await taskService.remove(req.params.id))
  } catch (err) {
    console.error(`Error while deleting task`, err.message)
    next(err)
  }
}

module.exports = {
  getOne,
  getMany,
  create,
  update,
  remove,
}
