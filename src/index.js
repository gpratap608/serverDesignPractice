import dotenv from 'dotenv'
import connectDB from './db/dbconnect.js'
import app from './app.js'

dotenv.config({
    path:"./.env"
})

const serverPort = process.env.PORT || 8080

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error in index.js",error)
    })
    app.listen(serverPort,()=>{
        console.log({
            serverStatus:`Application is Running`,
            URL:`http://localhost:${serverPort}`
        })
    })
})
.catch((error)=>{
    console.log("DB connection Failed from index.js",error);
})