const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const morgan  = require("morgan");
const app = express();
const taskRouter = require('./routes/todoRoutes')
const dotenv = require("dotenv")

app.use(morgan("dev"));
app.use(cors())
app.use(express.json())

dotenv.config()

const connectdb = async()=>{
    try{
        const cons  =await mongoose.connect(process.env.mongoURL)
        console.log("Connected Successfully")
    }catch(err){
        console.log(err)
    }
}

connectdb();
app.use("/",taskRouter.router)
app.listen(process.env.PORT || process.env.port,()=>{
    console.log(`Server Started Listening on port ${process.env.port}`)
})