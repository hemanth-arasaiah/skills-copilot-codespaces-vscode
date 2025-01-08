// Create a web server that listens on port 3000 and serves the following HTML file. The comments.js file should contain the JavaScript code that makes an AJAX request to the server at http://localhost:3000/comments and logs the response to the console.
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Comments</title>
//   </head>
//   <body>
//     <h1>Comments</h1>
//     <script src="comments.js"></script>
//   </body>
// </html>
// For this task, you can use the http module in Node.js. You can assume that the server is running locally and that the comments.js file is in the same directory as the HTML file. The server should respond with the following JSON object:
// {
//   comments: [
//     { id: 1, text: 'Comment 1' },
//     { id: 2, text: 'Comment 2' },
//     { id: 3, text: 'Comment 3' },
//   ],
// }
// The comments.js file should contain the following JavaScript code:
// fetch('http://localhost:3000/comments')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// This code makes an AJAX request to the server at http://localhost:3000/comments and logs the response to the console. You can run the server using the following code:
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   fs.readFile('index.html', (err, data) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     res.end();
//   });
// });
// server.listen(3000);
// After running the server, you can open the HTML file in a web browser and see the comments logged to the console.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(3000);

// comments.js
fetch('http://localhost:3000/comments')
  .then((response) => response.json())
  .then((data) => console.log(data));
// The code in comments.js makes an AJAX request to the server at http://localhost:3000/comments and logs the response
