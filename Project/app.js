const express = require('express');
const app = express.createServer();
const bodyParser = require('body-parser');

const port = 3000;

const users = require('./routes/users');
const { response } = require('express');

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin','*');
  res.set('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
  res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type,Authorization');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', users);

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(err.statusCode).send(err)
  }
  return res.status(500).send(err);
});

app.use('*', (req, res)=> {
  res.status(404).send({message: 'Not Found'});
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

/*
let express = require('express')
let fs = require('fs')
let app = express()

app.use(express.bodyParser())

app.get('/', function(request, response) {
  console.log('GET /')
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(html)
})

app.post('/', function(request, response) {
  console.log('POST /')
  console.dir(request.body)
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('thanks')
})

const port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)

var http = require('http'),
    qs = require('querystring');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/formData') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      var data = qs.parse(body);
      // now you can access `data.email` and `data.password`
      res.writeHead(200);
      res.end(JSON.stringify(data));
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);

const express = require('express');
const app = express();
const multer=require('multer');
const upload=multer();
const bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.send('Hello');
});
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res) {
  console.log(req.body);
  res.send('receive');

});

app.listen(3000);
const http = require('http');
var url = require('url');
var static = require('node-static');
var file = new static.Server('.',{
  cache: 0
});
function accept(req, res) {
if (req.url == '/index.html') {
file.serve(req, res);		// can set delay
} else {
file.serve(req, res);
}
}

if (!module.parent){
http.createServer(accept).listen(8080);
console.log("Server running on port 8080");
} else{
  exports.accept=accept;
}*/
