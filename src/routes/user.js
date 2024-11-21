const express = require("express")
const userService = require("../services/userService")

const userRouter = express.Router()

userRouter.get("/", (req, res)=>{
        res.send("welcome to the user route")
})


userRouter.post("/signup",userService().signUserUp)

module.exports = userRouter;