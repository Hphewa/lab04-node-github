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

//Creating a web server
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000");

//Making an HTTP request
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});

//Using a module
const myModule = require('./my-module');
console.log(myModule.myFunction());

