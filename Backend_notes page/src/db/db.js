const mongoose = require("mongoose")

async function connectDB(){

  await mongoose.connect("mongodb+srv://shiva:Razb8unlWFfFVviq@backend.gakadir.mongodb.net/hally");

  console.log("Connected to DB")
}

module.exports = connectDB