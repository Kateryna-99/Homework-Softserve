let arr=[2,3,4,5], multip=1;
for (let i=0; i<arr.length; i++) {
    multip*=arr[i];
}
console.log(multip);

multip=1;
let j=0;
while (j<arr.length){
    multip*=arr[j];
    ++j;
}
console.log(multip);    //task1



for (let count=0; count <=15; count++){
    if (count%2==0){
    console.log(count+ 'even');} 
    else {
        console.log(count+ 'add');} }   //task2*/ 




 function randArray(k){
     let array=[];
     k=array.length;
     for (let i=0;i<=k;i++){
        let rand=Math.floor(Math.random()*500);
        array[i]=rand;
     }return array[k];
     alert(array[k]);
    }

randArray(5)//tas3 - it does not work


function raiseToDegree(a,b){
    let result=a;
for (let i=1; i<b; i++){
    result *=a;
}
return result;
}
let a=prompt ('Введіть значення а',);
let b=prompt ('Введіть значення b',);

if (b<1) {
    alert('Степінь' +b+ 'не приймається');
}   else {
    alert (raiseToDegree (a,b));
}                             //task 4




        function findMin(){
            for (let i=0; i<arguments.length; i++) 
        {
           if(arguments[i]<arguments[0]){
               arguments[0]=arguments[i];
           }else {}
            
    }alert(arguments[0]);
}
findMin(12, 14, 7,-65, 4, -4, 0.2); //task5


function findUnique(arr){
    for(let i = arr.length-1; i>=0;i--){
        if (arr.indexOf(arr[i])!=i) {
        
            alert ('false');
            break;
        } else {
            alert('true');
            break;
        }
    }
}
    findUnique([1, 2, 3, 5, 3]);  
    findUnique([1, 2, 3, 5, 11]); //task5


    function lastElem(array, x){
        if (x==undefined){
          elem= array[array.length - 1];
            return elem;
        }
let array1=[];
array1=array.slice(-x);
        return array1;
    }
console.log(lastElem([3, 4, 10, -5]));       
console.log(lastElem([3, 4, 10, -5],2));   
console.log(lastElem([3, 4, 10, -5],8));   //task6


   

   function Capitalize(str){
    let arr = str.split(" ");
    for(let i = 0; i< arr.length; i++)
    {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let result = arr.join(" ");
    console.log(result);
    }

    Capitalize('i love java script' )

