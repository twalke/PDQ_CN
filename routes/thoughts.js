const express = require("express");
const thoughtRouter = express.Router();
const Thought = require("../models/thought");
const Bottleneck = require("bottleneck");

const limiter = new Bottleneck({
  maxConcurrent: 1
});

//handle endpoints here
thoughtRouter.route("/")
  .get((req, res, next) => {
    //ask database for entire collection of thoughts
    limiter.schedule(() =>Thought.find())
      .then(thoughtCollection => res.status(200).send(thoughtCollection))
      .catch(err => {
        if(err.statusCode == 404) {
          console.log("\nERROR: 404 NOT FOUND\n")
        }
      })
  })

module.exports = thoughtRouter;
