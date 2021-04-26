
//task1
function registr(){
let regExp=/^[A-Z]/
if (regExp.test(str)){
    alert('Strings  starts with uppercase character ');
}
    else 
    alert('Strings not starts with uppercase character'); 
} 
let str="Hello"
registr()


//task2
function checkEmail (email){
 let regExp=/^\S+\@\S+\.\S+$/ig;
 if (regExp.test(email)) {
     alert('Ви ввели email!')
 }
 else {
     alert('Ви ввели некоректне значення email')
 }
}
checkEmail("Qmail@gmail.com");


//task3
function findLetters(str){  
  let regExp=(/d(b+)(d)/i);
  let result=str.match(regExp);
  let Array=[];
  Array[0]= result[0];
  Array[1]= result[1];
  Array[2]= result[2];
  console.log(Array) 
}
findLetters("cdbBdbsbz") 

//task4
let str="Java Script"
let regExp=/(\w+)\s(\w+)/;
let newstr=str.replace(regExp, '$2, $1');
alert(newstr)  

//task5
function check (number){
    let regep=/([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})/
   if (regep.test(number))
   alert('Thanks');
   else alert('This is not valide number')
}
check ("9999-1999-9999-9999")


//task6
function checkEmail (email){
    let regExp=/^[A-Za-z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;
    if (regExp.test(email)) {
        alert('Email is correct!')
    }
    else {
        alert('Email is not correct!')
    }
   }
   checkEmail("my_ma-il@gmail.com");
   checkEmail('#my_mail@gmail.com');

//task7//
  function login(log){
      let regExp=/^[A-Za-z]{1}[A-Za-z0-9\.0-9]{1,9}$/
      alert (regExp.test(log));
      let regNumber=log.match(/[0-9]*[0-9][.]?[0-9]*/g);
      alert(regNumber);    
   }
   login('ee1.1ret3');
   login('ee1*1ret3');



