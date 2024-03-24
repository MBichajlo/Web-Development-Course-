import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/kurwa", (req, res) => {
  res.send("<p>sadwdasdadwsadwad</p>");
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
