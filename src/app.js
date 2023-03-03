require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const mongo = require('./database/mongo')
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')
const taskRouter = require('./routes/task.route')

const app = express()

/** Connect to MongoDB */
mongo.connectToDb()

/** Middlewares */
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))

/** Routers */
app.use('/', authRouter)
app.use('/me', userRouter)
app.use('/tasks', taskRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
