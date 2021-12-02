const express = require("express")
require("express-async-errors")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const BMIRouter = require("./controllers/bmi")
const middleware = require("./utils/middleware")

morgan.token('body', (request, response) => {
    return JSON.stringify(request.body)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use('/api/bmi', BMIRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app