const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true
      //trim: true,       Dont need these 2, as we cannot create an exercise without a user, and the user has already met these 2 requiremnets
      //unique: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Exercise = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercise;
