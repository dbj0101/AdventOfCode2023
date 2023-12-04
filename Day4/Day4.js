let dir = "/Day4";
let testdata = process.cwd() + dir + "/testdata.txt";
let data = process.cwd() + dir + "/data.txt";

let fs = require("fs");
let inStr = fs.readFileSync(testdata).toString("utf-8");
//inStr = fs.readFileSync(data).toString("utf-8");

let inData = inStr.split("\n");
console.log(inData);
