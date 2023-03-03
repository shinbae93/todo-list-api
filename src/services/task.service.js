const { Task } = require('../models/Task')

async function getOne(id) {
  const task = await Task.findById(id)
  return task
}

async function getMany() {
  return await Task.find()
}

async function create(taskInput) {
  const task = new Task(taskInput)
  await task.save()

  return task
}

async function update(id, updatedTask) {
  const task = await Task.findByIdAndUpdate(id, updatedTask)
  return task
}

async function remove(id) {
  return await Task.findByIdAndDelete(id)
}

module.exports = {
  getOne,
  getMany,
  create,
  update,
  remove,
}
