// Q3.6: Algorithms to write and read files
function writeAFile(fileName, fileContent) {
  const fs = require('fs');
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error while writing file: ", err);
      return;
    }
    console.log("File written successfully");
  })
}

function readAFile(filePath) {
  const fs = require('fs');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error while reading file: ", err);
      return;
    }
    console.log("File: ", data);
  })
}

writeAFile("myFile.txt", "Hi, hey, hello.");
readAFile("myFile.txt");