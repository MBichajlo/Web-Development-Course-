/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import input from "inquirer";
import qr from "qr-image";
import fs from "fs";

const question = {
  type: "input",
  name: "URL",
  message: "Enter the URL",
};
input.prompt([question]).then((answers) => {
  fs.writeFile("URL.txt", answers["URL"], (err) => {});
  var qr_svg = qr.image(answers["URL"], { type: "png" });
  qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));
  console.log(answers["URL"]);
});
