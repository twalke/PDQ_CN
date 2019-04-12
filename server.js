const express = require("express");
const request = require("request");
const cors = require("cors");

require("dotenv").config();

function getThought() {
  const app = express();
  app.use(cors());
  app.use("/api/thoughts", require("./routes/thoughts"));

  app.get('/thought', function(req, res, next){
    request('https://pdqweb.azurewebsites.net/api/brain', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      } else if (response.statusCode == 500) {
        let err = new Error('Internal Server Error');
        err.statusCode= 500;
        next(err);
      }
    })
  });

  app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`)
  });
}

getThought();
