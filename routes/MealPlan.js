const express = require("express");
const router = express.Router();
const axios = require("axios");
const mealPlan = require("../models/mealPlan");

const API_KEY = "c4a537f9b8a74eff8642d5d7f2102955";

//this endpoint is to handle the post req
router.post('/getMealData', async (req, res) => {

    const { calories } = req.body

    const {userID} = req.user.id

    const { data } = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`)
    
    res.status(200).send(data)

    //setting a new propertt to the data obj and giving it a key (userID)
    data['userID'] = userID

    //get meal -- userID
    const mealExist = await mealPlan.findOne({ userID })

    //checking if the meal exists for that user
    if (mealExist) {
        //if it exists, then update the plan with the new one
        await mealPlan.updateOne({ userID }, data)
    } else {
        //if it doesnt exist, then create a new one
        await mealPlan.create(data)
    }

    console.log('Completed')
})


//get req endpoint /getSavedMeal/123 
router.get('/getSavedMeals', async (req, res) => {

    const  userID  = req.params.id

    const mealData = await mealPlan.findOne({ userID })
    res.send(mealData)
})


module.exports = router
