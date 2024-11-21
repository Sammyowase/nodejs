const express = require("express");
const connectToDb = require("./src/config/index");
const userRouter = require("./src/routes/user");

const app = express();
app.use(express.json())

connectToDb()

app.use("/api/v1/users", userRouter);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("Port:", PORT);
    
})