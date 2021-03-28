
let x = 1;
let y = 2;

let res1 =x+String(y); 
let text= 'Допишіть код, необхідно використовувати змінні x і y';
console.log(text);
console.log(res1);  
console.log();
console.log(typeof res1);   //res 1

let res2 = Boolean(x) +String (y);
console.log(text, res2); 
console.log(typeof res2);       //res 2

let res3 =  x !=y; 
console.log(text,res3); 
console.log(typeof res3); // res 3

let res4 =Number (String (x)+ Boolean (y)); 
console.log(text,res4 ); 
console.log(typeof res4); // res 4 //task1



let num=prompt('Введіть число',1);

if (num>0 &&num%2==0) {
    console.log('Так! Введене число є парне  додатнє. ');
}


else if (num<0 || num%2>0 ||num%2<0 ||num==0) {
    console.log('Ні! Число не парне додатнє ')
}


if(num%7==0){
    console.log('Так!Введене число кратне 7.');
}
else if(num==0 ||num%7>0||num%7<0){
    console.log('Ні!Введене число не є кратним 7');
}
else{
    console.log('Введене значення не є числом');
}                                                //task2



const task=[];
task[0]=34;
task[1]='Lviv';
task[2]=2>1;
task[3]=0/0;
alert(task.length);
const newvalue=prompt('Введіть значення','Напишіть тут');
task[4]=newvalue;
alert(task[4]);
task.splice(0,1);
 let my_arr = document.getElementById('my_arr');
my_arr.innerHTML = task;     //task3     



let cities = ["Rome", "Lviv", "Warsaw"]; 
let ctr = cities.join('*');
console.log(ctr);                    // task4 


let isAdult=prompt('Write your age',18);
if(isAdult>=18 && isAdult<120){
    alert('Welcome! You are adult!');
}
else if(isAdult<18 &&isAdult>=0){
    alert('You are still too young!');
}
else if(isAdult>10 &&isAdult<18){
    alert('You are not adult!');
}
else if(isAdult<0 || isAdult>120){
    alert('You did not write the logical meaning of age');
}
else {
    alert('You did not write number!');
}                                              //task5  


var a =+prompt('Введіть довжину сторони а',10);
var b =+prompt('Введіть довжину сторони в',10);
var c =+prompt('Введіть довжину сторони c',10);
if (a>0 && b>0 && c>0 &&(a+b)>c &&(b+c)>a && (a+c)>b){
p=(a+b+c)/2;
let triangle =Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(triangle.toFixed(3));
}
else{  
    console.log('Ви ввели некоректні значення');
}

if (a**2+b**2==c**2 ||a**2+c**2==b**2 || b**2+c**2==a**2){
    console.log('Даний трикутник є прямокутним');
}
else {
    console.log('Даний трикутник не є прямокутним');
}                           //task6  


let currentDate = new Date();
let timeofDay =currentDate.getHours();
console.log(currentDate.getHours());
if (timeofDay>=5  && timeofDay<=11){
alert('Good morning!');} 
else if (timeofDay>11 &&timeofDay<=17){
    alert('Good day!');
}
else if (timeofDay>17 &&timeofDay<23){
        alert('Good evening!');
    }
else {
    alert('Good night');
}

let currenttime = new Date();
let timeDay =currenttime.getHours();
switch(timeDay){
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: 
    case 10:
    case 11:           
        alert('Good morning!');
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:        
            alert('Good day!');
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        alert('Good evening!');
        break;
        default:
            alert('Good night!');
}                                          //task7








   


    
    
    
    

