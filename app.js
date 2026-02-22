console.log("Hello from Node.js!");

// Read file
const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});

//Write to file
const fs1 = require('fs');

fs1.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});