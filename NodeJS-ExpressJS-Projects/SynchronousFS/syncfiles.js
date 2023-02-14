const fs = require("fs");

//Created Directory
fs.mkdirSync("demo");

//Created New File
fs.writeFileSync("newFile.txt", "This is my sample code 1 \n");

//Append
fs.appendFileSync("newFile.txt", "This is the sample code 2 \n");

//Read and Display
data = fs.readFileSync("newFile.txt", "utf-8");
console.log(data);

//Rename
fs.rename("synchfiles.js", "syncfiles.js");
