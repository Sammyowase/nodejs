const mongoose = require("mongoose");

const connectToDb =()=>{
    
const DB_URL = "mongodb+srv://samuelowase02:7gOv8GanKrTylyo3@cluster0.c7ltd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_URL)
.then(data => console.log("DB connected successfully"))
.catch(err => console.log(err))
}

module.exports=connectToDb;