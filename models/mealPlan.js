const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is the mongoose meal plan modal

const mealPlan = new Schema({
  userID: Number,
  meals: [
    {
      id: Number,
      image: String,
      imageType: String,
      readyInMinutes: Number,
      servings: Number,
      sourceUrl: String,
      title: String,
    },
  ],
  nutrients: {
    calories: String,
    carbohydrates: String,
    fat: String,
    protein: String,
  },
});

module.exports = mongoose.model("mealPlan", mealPlan);
