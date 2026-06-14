//require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from './db/index.js'



dotenv.config({
    path: "./env"
});

console.log("URI:", process.env.MONGO_DB_URI);
connectDB()









































































/*
import express from 'express'

const app = express()


( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("ERROR", err)
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR", error)
        throw err
    }
})()
*/