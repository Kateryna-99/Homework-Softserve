
//подія, яка реєструція при відкр.сторінки і слухає статус мережі
//при онлайн - перевіряє локальне сховище, виводить дані на сторінку (якщо є)б

//потім видаляє їх з localStorage
document.addEventListener('DOMContentLoaded',function(){
        if (navigator.onLine){
        alert("online");
        if(localStorage.getItem('array') !==null){
            let arrays=JSON.parse(window.localStorage.getItem('array'));
           // console.log(arrays);
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
     alert("Ви не в мережі");
} 
);
  


//функція, яка реагує на стан мережі і повертає true false
function checkOnlineState(){
    if(navigator.onLine){
     // console.log(document.forms.ident);
      sendServer();
      localStorage.removeItem('array');
    alert ('Відправляємо одразу на сервер');
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
    //   console.log(array);//забрати
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
//console.log('gh')
    let result = await response.json();
    //let users = JSON.parse(result);
   // console.log(users)
 //  console.log(result)
//typeof(result)
    for (let i = 0; i < response.length; i++) {
        lastname = document.getElementById('lastname').value;
        firstname = document.getElementById('firstname').value;
        dataOfBirth=document.getElementById('dataOfBirth').value;
        education=document.getElementById('education').value;
        direction=document.getElementById('direction').value;
        specialties=document.getElementById('specialties').value;
      document.getElementById('answer').innerHTML +=
    `<p> ${result[i].lastname}</p>`+
    `<p> ${result[i].firstname}</p>`+
    `<p> ${result[i].dataOfBirth}</p>`+
    `<p> ${result[i].education}</p>`+
    `<p> ${result[i].direction}</p>`+
    `<p> ${result[i].specialties}</p>`
    }
};


// відправляєм дані на сервер

async function sendServer() {

    let response = await fetch(baseUrl+ '/users' ,
        {
            mode: 'cors',
            method: 'POST',
            body: new FormData(ident)
        });
    
  let result = await response.body;
    
   // typeof(response);
   // result.send
    console.log (result)
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


//валідація вводу form
function valid() {
    
let value;
lastname = document.getElementById('lastname').value;
document.getElementById('answer').innerHTML="Вы ввели: "+lastname;
console.log(lastname)
}
