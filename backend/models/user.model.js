const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      trim: true //Removes 'spaces' before and/or after username string
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
