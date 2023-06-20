const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        // const conn = await mongoose.connect("mongodb+srv://sailendra:FsTcHksLYe6quQKz@cluster0.k8tsyqi.mongodb.net/")
        console.log(`MongoDB connected${conn.connection.host}`)

    } catch (error) {
        console.log(`Error is ${error.message}`)
        process.exit()
    }
}

module.exports = connectDB