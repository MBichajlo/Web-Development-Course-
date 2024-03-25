import express from "express";
import ejs from "ejs";
const port = 3000;
const app = express();

var day = "";

app.get("/", (req, res) => {
  var d = new Date();
  if (d.getDay() == 0 || d.getDay() == 6) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }
  res.render("index.ejs", {
    day: d.getDay(),
  });
});

app.listen(port, () => {
  console.log("up");
});
