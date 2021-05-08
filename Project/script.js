
//подія, яка реєструція при відкр.сторінки і слухає статус мережі
//при онлайн - перевіряє локальне сховище, виводить дані на сторінку (якщо є)б

//const { stringify } = require("qs");

//const { emit } = require("node:cluster");

//const { url } = require("node:inspector");

//потім видаляє їх з localStorage
document.addEventListener('DOMContentLoaded',function(){
        if (navigator.onLine){
        alert("online");}
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
            localStorage.removeItem('array');
alert('Ви можете відправити збережену форму або оновити її!')
                    }
})


//функція, яка реагує на стан мережі і повертає true false
function checkOnlineState(){
    if(navigator.onLine){
      console.log(document.forms.ident);
      sendServer();
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

 
    let response = await fetch(baseUrl + '/users')

    let result = await response.json()

    console.log(result)

}

// відправляєм дані на сервер

async function sendServer() {

    let response = await fetch(baseUrl + '/users',
        {
            
            method: 'POST',
            body: new FormData(ident)
        });
    let result=await response.json(); 
    console.log(result);
}

  /*

function sendServer() {
    const ajaxRequest = new XMLHttpRequest();
    
       ajaxRequest.open('POST', 'http://localhost:8080', true);
       ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       ajaxRequest.onreadystatechange = function() { 		 // for asynchronous  requests
if (ajaxRequest.readyState != 4) return;			 // for asynchronous  requests
  if (ajaxRequest.status != 201) {        
        alert('Error ' + ajaxRequest.status + ': ' + ajaxRequest.statusText);
  } else { 
      document.getElementById("answer").innerHTML=ajaxRequest.responseText;
   }
}
ajaxRequest.send(new FormData(ident));
  }
*/

/*
let form=document.forms.user;
function sendServer(){
    //let form=document.forms.form;
    let formData=new FormData(document.getElementsByTagName("form")[0]);
    let request=new XMLHttpRequest();
    request.open("POST", form.action);
    alert("тут ок")
    request.onreadystatechange=function(){
        if (request.readyState==4 && request.status==200){
        document.getElementById("output").innerHTML=request.responseText;
        console.log(this.responseText)
    }  
}
    request.send(formData);
}
*
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

function sendServer(){
let data=$('#ident').serialize();
$.ajax({
    type:"POST",
    url: "http://127.0.0.1:8000/",
    data: data,
    headers:{'Content-type': 'application/json; charset=UTF-8',},
   
    success:function(msg){
        alert(msg);
    }

})}

  /*
function sendServer(){
    //ident.onclick=
async (e)=>{
    e.preventDefault();
    let response=await fetch('http://127.0.0.1:8000',
    {
        mode: 'cors',
        method: 'POST',
        body: new FormData(ident)
    });
    let result=await response.json();
    alert(result.message);
};
}*/
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





