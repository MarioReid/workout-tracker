const router = require("express").Router()

const Workout = require('../models/workoutModel')

//GET ROUTE ALL WORKOUT DATA
router.get("/workouts", (req, res) => {
  Workout.find().then((allWorkouts) => {
    res.json(allWorkouts);
  });
});


router.post("/submit", ({ body }, res) => {

  res.send('This is the post route');
  // const user = new User(body);
  // user.setFullName();
  // user.lastUpdatedDate();

  // User.create(user)
  //   .then((dbUser) => {
  //     res.json(dbUser);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

module.exports = router;
