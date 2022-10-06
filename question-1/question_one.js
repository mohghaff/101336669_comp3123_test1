const lowerCaseWords = (array) =>
  new Promise((resolve, reject) => {
    const stringOnly = (val) => {
      if (typeof val === "string") {
        return val;
      }
    };
    if (Array.isArray(array) && array.length > 0) {
      resolve(array.filter(stringOnly).map((string) => string.toLowerCase()));
    } else {
      reject("The input is not a valid array.");
    }
  });

lowerCaseWords(["PIZZA", true, 25, false, "Wings"])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
