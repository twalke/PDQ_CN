const express = require("express");
const request = require("request");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.use("/api/thoughts", require("./routes/thoughts"));

request({url: 'https://pdqweb.azurewebsites.net/api/brain', json: true}, function(err, res, json) {
  if (err) {
    throw err;
  }

  app.get('/thought', (req, res) => res.send(json));

  app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`)
  })
});
