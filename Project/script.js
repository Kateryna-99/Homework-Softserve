
//подія, яка реєструція при відкр.сторінки і слухає статус мережі
//при онлайн - перевіряє локальне сховище, виводить дані на сторінку (якщо є)б

//const { parse } = require("node:path");

//const { stringify } = require("qs");

//const { emit } = require("node:cluster");

//const { url } = require("node:inspector");

//потім видаляє їх з localStorage
document.addEventListener('DOMContentLoaded',function(){
        if (navigator.onLine){
        alert("online");
        if(localStorage.getItem('array') !==null){
            let arrays=JSON.parse(window.localStorage.getItem('array'));
            console.log(arrays);
            function write(){
                inp=document.getElementsByClassName('ident'); 
            for (let i=0; i<arrays.length;i++){
            inp[i].value= arrays[i];              
            }
        }
        write();
          //  localStorage.removeItem('array');
alert('Ви можете відправити збережену форму або оновити її!')
                    };
}
 else 
     alert("Ви ще не в мережі");
} 
);
  


//функція, яка реагує на стан мережі і повертає true false
function checkOnlineState(){
    if(navigator.onLine){
      console.log(document.forms.ident);
      sendServer();
      localStorage.removeItem('array');
    alert ('відправити одразу на сервер');
    }
    else{   localSave();


        alert ('Немає доступу до мережі.Зберігаємо в localStorage')
    }
}

//функція, яка зберігає дані в localStorage
function localSave(){
   let array=[];
   inp=document.getElementsByClassName('ident');
   function save(){
       for (let i=0;i<inp.length; i++){
array[i]=inp[i].value;
       }
       console.log(array);//забрати
   }
   save(); 
   localStorage.setItem("array",JSON.stringify(array));                             //створюємо масив з інпутів
}

//створення сервера
//відправляємо дані на сервер


const baseUrl = 'http://localhost:3000';

// гетаєм дані з серверу 

async function getFromServer() {

 
    let response = await fetch(baseUrl+ '/users')

    let result = await response.json();
    let users = JSON.parse(this.result);
    console.log(users)
    for (let i = 0; i < users.length; i++) {
      document.getElementById('answer').innerHTML +=
   
    `<p> ${result[i].lastname}</p>`+
    `<p> ${result[i].firstname}</p>`
    }
    console.log()
    
};


// відправляєм дані на сервер

async function sendServer() {

    let response = await fetch(baseUrl+ '/users' ,
        {
            mode: 'cors',
            method: 'POST',
            body: new FormData(ident)
        });
    let result = await response.json();
    console.log(result);
    
};
/*
const baseUrl = 'http://localhost:3000'
function sendServer() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', baseUrl + '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    let lastnameVal = document.getElementById('lastname').value;
    let firstnameVal = document.getElementById('firstname').value;
    res=JSON.stringify({
        lastname: lastnameVal,
        firstname: firstnameVal
    });
    xhr.send(res);
   
  }

  
function getFromServer() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/users');
    xhr.onload = function () {
      if (this.status === 200) {
        document.getElementById('answer').innerHTML = '';
        let users = JSON.parse(res);
    for (let i = 0; i < users.length; i++) {
      document.getElementById('answer').innerHTML +=
    `<p> ${users[i].lastname}</p>`+
    `<p> ${users[i].firstname}</p>`
    }   
      } 
    };
    xhr.send();
  }*/
  


/*
let form=document.forms.user;
function sendServer(){
    //let form=document.forms.form;
    let formData=new FormData(document.getElementsByTagName("form")[0]);
    let request=new XMLHttpRequest();
    request.open("POST", "https://jsonplaceholder.typicode.com" );
    alert("тут ок")
    request.onreadystatechange=function(){
        if (request.readyState==4 && request.status==200){
        document.getElementById("output").innerHTML=request.responseText;
        console.log(this.responseText)
    }  
}
    request.send(formData);
}

function sendServer(){
$(function () {
    $("#ident").click(function (event) {
      event.preventDefault();
      $.post("/handler", $(this).serialize(),
      function(data){
          $('#answer')/append(data);
      });
      $('#formOut').append(trHTML);
    })
  })
}

function sendServer() {
    let object={};
    let form=new FormData(ident)
    form.forEach(function(value,key){
        object[key]=value;
    });
    let json=JSON.stringify(object);
    console.log(json);
    const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();
  
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get('https://jsonplaceholder.typicode.com', urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post('https://jsonplaceholder.typicode.com', urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
  
app.get("/", function(request, response){
    response.send("Главная страница");
})};
/*
function sendServer(){
let data=$('#ident').serialize();
$.ajax({
    type:"POST",
    url: "https://jsonplaceholder.typicode.com",
    data: data,
    headers:{'Content-type': 'application/json; charset=UTF-8',},
   
    success:function(msg){
        alert(msg);
    }

})}

  */

//випадаючі списки для вибору потрібноі спеціальності в ІТ
const specialArr={
    'tech':['Back-end developer', 'Front-end developer', 'Nest Engineer/QA', 'Full stack'],
    'non_tech':['Rpoject manager', 'HR-manager', 'Prodact manager', 'Recruter', 'PR-manager', 'Tech Lead', 'Event manager'],
}
let prime_select=document.getElementById('direction');
prime_select.addEventListener('change', func);
prime_select.addEventListener('change', toParagraph);

let special_select=document.getElementById('specialties');
special_select.addEventListener('change',toParagraph);
function func(){
    special_select.innerHTML='';
    let selected_direction=prime_select.value;
    for (let i=0;i<specialArr[selected_direction].length; i++){
        let new_option=document.createElement('option');
        new_option.innerHTML=specialArr[selected_direction][i];
        special_select.appendChild(new_option)
    }
}
let parag=document.querySelector('p');
function toParagraph(){
    parag.innerHTML='';
    parag.innerHTML=prime_select.options[prime_select.selectedIndex].text+','
    +special_select.options[special_select.selectedIndex].text
}


//додати параграф з інфо About після  <h1 id="header1">We will find you a job in IT!</h1>

const newP=document.createElement('p');
newP.className='info';
newP.innerHTML="We are the best recruitment company.For 10 years we have been recruiting staff for the largest IT companies!";
header1.after(newP);

