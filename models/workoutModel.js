const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

// WorkoutSchema.methods.setFullName = function() {
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   return this.fullName;
// };

// WorkoutSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
