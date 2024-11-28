// Create web server
// Create a web server that listens to requests on port 3000 and returns the comments data from the comments.js file when a GET request is made to the /comments URL. The comments data should be returned as JSON.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    fs.readFile('./comments.js', (err, data) => {
        if (err) {
            res.end('Error reading comments.js');
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});