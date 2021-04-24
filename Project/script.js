
//подія, яка реєструція при відкр.сторінки і слухає статус мережі
//при онлайн - перевіряє локальне сховище, виводить дані на сторінку (якщо є)б
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

//відправляємо дані на сервер
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







