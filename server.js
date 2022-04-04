require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//this will use the public folder to display the images and it will be as in "http://localhost:8080/images/<imageName>"
app.use(express.static("public"));

//enables cors
app.use(cors())
//enables the use of json  and urlencoded to GET req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware
app.use((req, res, next) => {
    console.log("Incoming request")
    next()
})

//mongoDB URL 
const MONGODB_URI =
  "mongodb+srv://IbrahimAbudalah:Ibrahim00@cluster0.sczn7.mongodb.net/YourFitnessPal?retryWrites=true&w=majority";

//this is to connect to the database using its URL
mongoose.connect(MONGODB_URI, console.log("Connected to DataBase"));

//routes
const route = require("./routes/mealPlan")
app.use("/", route);

//listener
app.listen(process.env.PORT, () =>{
    console.log("server is running on port 8080")
})