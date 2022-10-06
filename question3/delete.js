const fs = require("fs");
const path = require("path");
const dir = "./question3/logs";

const files = fs.readdirSync(dir);
for (const file of files) {
    fs.unlinkSync(path.resolve(dir, file));
    console.log(dir+"/"+file+" has been deleted successfully");
}
fs.rmdirSync(dir);