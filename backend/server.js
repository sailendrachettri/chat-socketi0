const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data')
const conncetDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const cors = require("cors");


const app = express()
app.use(cors())
dotenv.config()
conncetDB()

const PORT = process.env.PORT || 6000

app.use(express.json()) // to accept json data

app.get('/', (req, res) => {
    res.send("API is running")
})

app.use('/api/user/', userRoutes)
app.use('/api/chat', chatRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`))