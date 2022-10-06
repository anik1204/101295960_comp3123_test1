const fs = require("fs");

const dir = "./question3/logs";

if (fs.existsSync(dir)) {
  console.log("Directory exists! Creating Log Files.");
  for(let i=1; i<=10; i++){
    fs.writeFile("./question3/logs/log"+i+".txt", "Log #"+i+" Created", function (err) {
        if (err) throw err;
        console.log("log"+i+".txt");
      });
  }
} else {
    fs.mkdirSync(dir);
    console.log("Directory does not exist! Creating Directory and Log Files.");
  for(let i=1; i<=10; i++){
    fs.writeFile("./question3/logs/log"+i+".txt", "Log #"+i+" Created", function (err) {
        if (err) throw err;
        console.log("log"+i+".txt Created successfully at "+dir);
      });
  }
}
