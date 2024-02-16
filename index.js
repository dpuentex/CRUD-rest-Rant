const express = require("express");
const app = express();

app.use("/place", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//WILDCARD
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);