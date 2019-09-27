const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.json("Error: ", err));
});

router.route("/add").post((req, res) => {
  const newUsername = req.body.username;
  const newDescription = req.body.description;
  const newDuration = Number(req.body.duration);
  const newDate = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username: newUsername,
    description: newDescription,
    duration: newDuration,
    date: newDate
  }).save(() => {
    res.json("New Exercise added");
  });
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.json("Error: ", err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(res.json("Successfully Deleted"))
    .catch(err => res.json("Error: ", err));
});

router.route("/:id/update").post((req, res) => {
  Exercise.findById(req.params.id, exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = req.body.duration;
    exercise.date = req.body.date;

    exercise.save(() => {
      res.json("Successfully updated exercise");
    });
  });
});

module.exports = router;
