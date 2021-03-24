let lastName
lastName='Kuliavets';
console.log(lastName);  //task2

let age;
let profession;
age='35';
profession='chemist';
alert(age);
alert(profession);
profession=age;
alert(age);
alert(profession);   //task3

const mentor ={
    string: "Ostap",  
    number:"30",          
    boolean:"true",      
    underfine:"",        
    null:"null",   }
alert(mentor);
console.log (typeof mentor);      //task4

let isAdult=confirm("Are you an adult?");
console.log(isAdult);    //task5


let name;
let lastname;
let group;
let yearOfBirth;
let married;
name='Kateryna';
lastname='Kuliavets';
group="583";
yearOfBirth=1985;
married=true;
console.log(group);
console.log(yearOfBirth);
console.log(married);
console.log(name);
console.log(lastname);
let adress=null;
let phone;
console.log(typeof adress); 
console.log(typeof phone);   //task6


let login = prompt('What is your login?',123456789);
let mail=prompt("What is your mail?",'iam@gmail.com');
let password=prompt("What is your login?",'enter your password here');
alert ('Dear User! Your login is ' +login+ ', you email is '+mail+ ', your password is '+password+ '. Welcome!');     //task7


let x=1;
let hour =60*60*x;
let day=hour*24;
let month30=day*30;
let month31=day*31;
let month28=day*28;
let month29=day*29;

alert ('One hour contains ' +hour+' seconds. One day contains '+day+ ' seconds. If one month has 28 days, it contains '+month28+ ' seconds, if 29 -' +month29+ ' seconds, if 30 - '+ month30+ ' seconds, if 31 - ' +month31+ ' seconds.');     //task8






