
//GET ROUTE ALL WORKOUT DATA
app.get("/api/workouts", (req, res) => {
  Workout.find().then((allWorkouts) => {
    res.json(allWorkouts);
  });
});