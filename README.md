
# YourFitnessPal

YourFitnessPal is a fitness oriented react app that allows users
to calculate their daily caloric intake and generate a meal plan 
according their daily caloric intake.



## Acknowledgements

 - Make sure to clone the client side repository in order to run the app
 - You can find the client side repository [here](https://github.com/Ibrahimabudalah/capstone-client)


## Screenshots

![App Screenshot](https://i.postimg.cc/0j9Mv2pG/Screen-Shot-2022-04-06-at-4-18-42-AM.png)


## Usage Details

- Log-in or Register
- Calculate your daily caloric intake using the calorie calculator
- Copy the amount of calories given to the nearest decimal
- Navigate to the Meal Planner Page and paste the amount of calories copied into the input field
- TA DA!! Now you have a meal plan that you can follow for the entire daily!
- If you want to regenerate a meal plan, only repeat step number 4


## Features

- Sign up
- Sign in
- Cross platform
- Easy to use


## Run Locally

Clone the project

```bash
  git clone git@github.com:Ibrahimabudalah/capstone-server.git
```

Go to the project directory

```bash
  cd capston-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx nodemon server.js || node server.js
```


## Tech Stack

**Server:** Node, Express, Axios, MongoDB, Mongoose, JWT


## API Reference

#### Generate a Meal Plan

```http
  GET https://api.spoonacular.com/mealplanner/generate?apiKey=
  API_KEY&timeFrame=day&targetCalories=calories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `string` | **Required**. Your API key |
| `calories` | `string` | **Required**. Number of calories to generate the mealPlan |

