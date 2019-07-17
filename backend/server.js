// --------------------- IMPORT MODULES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const { portNumber, db } = require("./conf.js");

// --------------------- USE MODULES

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// --------------------- ROUTES

app.get("/", (req, res) => {
  res.send("/");
});

app.use("/auth", require("./routes/auth"));

app.post("/shopping", (req, res) => {
  db.query("INSERT INTO shopping SET ?", [req.body], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});

app.post("/act", (req, res) => {
  db.query("INSERT INTO show_act SET ?", [req.body], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});

app.get("/act", (req, res) => {
  db.query("SELECT * FROM show_act", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post("/show", (req, res) => {
  console.log(req.body);
  db.query("INSERT INTO `show` SET ?", [req.body], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});

app.get("/show", (req, res) => {
  db.query("SELECT * FROM `show`", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// --------------------- SERVER LAUNCH

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
