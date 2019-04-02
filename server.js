const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/thoughts", require("./routes/thoughts"));

app.use((err, req, res, next) => {
  res.send({errMsg: err.message})
})

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to MONGODB")
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`)
})
