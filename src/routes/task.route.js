const express = require('express')
const taskController = require('../controllers/task.controller')

const router = express.Router()

router.get('/:id', taskController.getOne)
router.get('/', taskController.getMany)
router.post('/', taskController.create)
router.put('/:id', taskController.update)
router.delete('/:id', taskController.remove)

module.exports = router
