const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const ModelClass = require("./model.js");
require("dotenv").config();
const core = require("cors");

import("./my-app/build/handler.js").then(({ handler }) => {
  // Use the handler here

  app.use(handler);
}).catch(err => {
  console.error('Error importing handler.js:', err);
});

const app = express();
const port = 3000;

const Model = new ModelClass();
app.use(cookieParser());


app.use(cookieParser());




// Specify the absolute path to the 'public' directory
//const publicPath = path.join(__dirname, "public");

// Serve static files from the 'public' directory


app.get("/stores", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  stores = await Model.getStores();
  res.json(stores);
});

app.get("/login", async (req, res) => {
  const { username, password } = req.query;
  if (username === "ahmed" && password === "12345") {
    res.cookie("token", "super-secret-cookie", {
      httpOnly: true,
      secure: true,
    }); // den betyder bara server kan be able to läsa kookie
    res.send("Login Lyckades!");
  } else {
    res.status(401).send("Unauthorized!");
  }
});

app.get("/check-user-status", async (req, res) => {
  //console.log(req.headers.cookie);
  const { token } = req.cookies;
  if (token === "super-secret-cookie") {
    res.send("User is logged in!!!");
  } else {
    res.status(401).send("Unauthorized");
  }
  //res.send("protocole route");
});

const server = async () => {
  await Model.connectDatabase();
  await Model.setupDatabase();

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};


server();
