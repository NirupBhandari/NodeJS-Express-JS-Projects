const fs = require("fs");

//Created Directory
const path = require("path");

fs.mkdir(path.join(__dirname, "test"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});

//Created New File
fs.writeFile("file.txt", "First line \n", (err) => {
  console.log(err);
  console.log("File created");
});

//Append
fs.appendFile("file.txt", "This is the 2nd line \n", () => {
  {
    console.log("Appended");
  }
});

//Read and Display
const data = fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("The error is " + err);
  console.log(data);
});

//Rename
fs.rename("asynchfiles.js", "asyncfiles.js", () => {
  console.log("\nFile Renamed!\n");
});
