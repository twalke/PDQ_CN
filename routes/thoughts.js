const express = require("express");
const thoughtRouter = express.Router();
const Thought = require("../models/thought");

//handle endpoints here

thoughtRouter.route("/")
  .get((req, res, next) => {
    //ask database for entire collection of thoughts
    Thought.find()
      .then(thoughtCollection => res.status(200).send(thoughtCollection))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })

thoughtRouter.route("/:id")
  .get((req, res, next) => {
    //get id from req params
    const id = req.params.id;
    //find by id
    Thought.findById(id)
      .then(foundCanyon => res.status(200).send(foundThought))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })

module.exports = ThoughtRouter;
