const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
      if (arr.length >= 0 && Array.isArray(arr)) {
        let fArr = arr.filter((e) => typeof e === "string");
        let result = fArr.map((e) => e.toLowerCase());
        resolve(result);
      } 
      else {
        reject("Invalid array");
      }
    });
  };
  
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  
  lowerCaseWords(mixedArray)
    .then((value) => console.log(value) )
    .catch((error) => console.log(error));