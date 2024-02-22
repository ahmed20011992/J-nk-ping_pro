const cookieParser = require("cookie-parser");

require("dotenv").config();
express = require("express");
app = express();
port = 3000;

ModelClass = require("./model.js");
Model = new ModelClass();
app.use(cookieParser());

app.get("/stores", async (req, res) => {
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

server = async () => {
  await Model.connectDatabase();
  await Model.setupDatabase();

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

server();
