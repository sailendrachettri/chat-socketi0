const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data')
const conncetDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')


const app = express()
dotenv.config()
conncetDB()

const PORT = process.env.PORT || 3000

app.use(express.json()) // to accept json data

app.get('/', (req, res) => {
    res.send("API is running")
})

app.use('/api/user/', userRoutes)

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`))