require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//this will use the public folder to display the images and it will be as in "http://localhost:8080/images/<imageName>"
app.use(express.static("public"));

//enables cors
app.use(cors())


//middleware
app.use((req, res, next) => {
    console.log("Incoming request")
    next()
})

//routes
// const route = require("")
// app.use("/mealPlanner");

//listener
app.listen(process.env.PORT, () =>{
    console.log("server is running on port 8080")
})