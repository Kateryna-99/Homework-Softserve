//task1
const http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});  
const os = require("os");
response.write('OS type : ' + os.type());
response.write(' Current user name: ' + os.userInfo().username);
let uptime=os.uptime();
response.write(' System work time : ' +(uptime/60) +' minutes');
const path=require('path');
pat='C:\nodejs\server.js'
response.write(' Current work directory: ' + path.dirname(pat));
response.write(' Server fail name: ' + path.basename(pat))
console.log('Server running at http://127.0.0.1:5000/');
response.end('Testing NodeJS server\n');
}).listen(5000);






//task2
const http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
const personalmodule=require('.//personalmodule');
response.write(`Date of request: ${personalmodule.date}`)
const os = require("os");
  let name=os.userInfo().username;
  response.write(personalmodule.getMesssage(name));
  response.end('Testing NodeJS server\n');
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');

