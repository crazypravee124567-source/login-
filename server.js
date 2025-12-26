const express = require("express");
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// test route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  res.send("Login Successful");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});