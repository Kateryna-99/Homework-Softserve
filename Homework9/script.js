//task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y,  ,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]            




//task2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names,ages} = data;
 let[name1, name2, name3, name4]=names;
 let [age1,age2,age3,age4]=ages;
 console.log(name2); // "Tom"
 console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26



 //task3
 function mul(  ...manyMoreArgs) { 
   let result=1;
   k=0;
   for(let i = 0, len=manyMoreArgs.length; i<len; i++){   
       if(typeof manyMoreArgs[i]==='number'){
           result=result*manyMoreArgs[i];
           k=k+1
       }
   }
   if(k===0) { result=0
}  return (result);
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


//task4
let server = {
    data: 0,
    convertToString: function (callback) {
        callback( ()=> this.data + "")}
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback=>(this.result = callback()));
     }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
 


//task5
function mapBuilder(keys, values){
    array=[];
    for (let i = 0; i < keys.length; i++) {
        array.push(keys[i]);
        array.push(values[i]);
    }  
    let size=2;
    let newArray=[];
    for (let i = 0; i <Math.ceil(array.length/size); i++) {
        newArray[i]=array.slice((i*size),(i*size)+size);  
    }
    console.log(newArray);
    let map=new Map (newArray);
   console.log(map);
    console.log(map.size)
    console.log(map.get(2))
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map=mapBuilder(keys, values);


