require("dotenv").config();
const app = require("./src/app")
const coonectDB = require("./src/db/db")

coonectDB();

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})