import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    htmlContent: "<h1> Write your name here </h1>",
  });
});

app.post("/submit", (req, res) => {
  const length = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs", {
    nameLength: length,
    htmlContent: "<h1> Write your name here </h1>",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
