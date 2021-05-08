//task2

console.log('personal')
let currentDate = new Date();
module.exports.date =currentDate;
module.exports.getMesssage=function (name){
  let hour=currentDate.getHours();
if (hour>=5  && hour<=11){
return'Good morning, ' +name;} 
else if (hour>11 &&hour<=17){
  return('Good day, ' +name);
}
else if (getHours>17 &&hour<23){
        return('Good evening, ' +name);
    }
else {
    return('Good night, ' +name);
}
}