const fs = require("fs");

const path = "./log";

const length = 10;

const createFolder = () => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  process.chdir(path);

  for (let i = 0; i < length; i++) {
    fs.writeFile(`log${i}.txt`, `This is file number ${i}`, (success) =>
      console.log(`log${i}.txt`)
    );
  }
};

const removeFolder = () => {
  fs.rm(path, { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
    for (let i = 0; i < length; i++) {
      console.log(`Deleting file...log${i}.txt`);
    }
  });
};

//createFolder()
removeFolder()