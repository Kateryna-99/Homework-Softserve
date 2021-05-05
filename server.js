const http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});  
if (request.method=='GET')
{
    response.end('get ')
}
else if (request.method=='POST'){
    response.end(' post ')
}
else{
    response.end('not')
}
//response.write(sendServer());
})
.listen(8000);
console.log('Server running at http://127.0.0.1:8000/');

/*const { response } = require("express");
const express = require("express");
const app = express();
 
app.use(function (request, response) {
  response.sendFile(__dirname + "/index.html");
});
 //const modul=require('.//modul')
 //response.write(`${module}`)
response.end('Testing NodeJS server\n').listen(5000);

console.log('Server running at http://127.0.0.1:5000/');


let express = require('express'),
    app = express(),
    path = require("path");
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.use('/handler', bodyParser.urlencoded({
    extended: true
}));

app.post('/handler', function(req, res, next) {
    // это обработчик на сервере, после отправки формы url заканчивается на "/handler"
    console.log(req.body);
    console.log("Cработал!");
    res.type('text/plain');
    res.json(req.body);
    res.end();
});

// ------ запустить сервер -------
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

console.log("Запущен сервер, порт 3000");
app.listen(8000);*/