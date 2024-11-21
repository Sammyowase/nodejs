
const User = require("../models/userModels")
const userService =()=>{
    const signUserUp = (req, res) =>{
        try{
        let newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.emailAddress = req.body.emailAddress;
        newUser.phoneNumber= req.body.phoneNumber;
        newUser.password = req.body.password;
        newUser.type = req.body.type

        newUser.save()
        .then(data =>{
            res.send("User saved successfully")
        })
        .catch(err => {
            console.log(err)
            res.send("An error occured")
            
        })
    }catch(error){
        res.send("There is an error with your request")
    }
    }

    return {signUserUp};
}

module.exports = userService;