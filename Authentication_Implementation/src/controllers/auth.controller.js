const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req,res){
  const { username, email ,password } = req.body;

  // Return true is username or email find otherwise false
   const isUserAlreadyExist = await userModel.findOne({
    email,username
   }) 

   if(isUserAlreadyExist){
    return res.status(409).json({
      message:"User already exist"
    })
   }

  const user = await userModel.create({
    username ,email,password
  })

  const token = jwt.sign({
    id:user._id
  },process.env.JWT_SECRET)

  res.cookie("token",token)

  res.status(201).json({
    message:"User registered successfully",
    user
  })
}

module.exports = { registerUser }