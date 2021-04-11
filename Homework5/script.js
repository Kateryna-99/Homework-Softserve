function propsCount(currentObject){
let i=0;
    for (let key in mentor){
    i=i+1;
    };
console.log (i);
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    rating: "hight",
};
propsCount(mentor);     //task 1 


//task2
let student1={
    course: "JS fundamental", 
    firstName: "Kateryna",
    lastName: "Kuliavets",
    age: 35,
    rating: "middle",
}
console.log (student1);
function showProps(obj) {
    console.log (Object.keys(student1));
    console.log(Object.values(student1));   
} 
showProps(student1)                      


//task3
 class Person{
     constructor(name, surname){
         this.name=name;
         this.surname=surname;}
         showFullName() {
            console.log (this.name + " " + this.surname);  
     }
 }
 class Student extends Person{
     constructor (name,surname,year){
     super (name,surname);
     this.year=year;
     }
     showFullName(middleName){
        this.middleName=middleName;
        return (this.surname+ " "+this.name+ " " +this.middleName)
     }
     showCourse() {
        let currentYear = new Date();
        let yearsNow=currentYear.getFullYear();
        let course=yearsNow-this.year;
        if (course<=6) 
        return course
        } 
     }                                         
     
     let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5 */



//task4
/*class Worker{
    constructor(fullName,dayRate,workingDays){
        this.fullName=fullName;
        this.dayRate=dayRate;
        this.workingDays=workingDays;    
        console.log(this.fullName) ;
    }
    showSalary(){
        const salary=this.dayRate*this.workingDays;
       console.log(this.fullName+' salary:'+salary);
        return salary;
    }
    #experience=1.2;
    showSalaryWithExperience(){
        let salaryExp=this.dayRate*this.workingDays*this.#experience;
       // console.log("New experience: " + this.#experience);
       // console.log(this.fullName + " salary " +salaryExp); 
        return salaryExp;  
        }
    get _experience() { 
    alert (this.#experience);
    //console.log('New experience'+this.experience);
    return this.#experience; }
    set _experience(value) { 
    value=1.5;
    this.#experience = value; 
    alert (this.#experience)
    //console.log('New experience'+this.experience);
    showSalaryWithExperience() 
    return 
    }
}
   // Worker.showSalaryWithExperience()  
const worker1 = new Worker("John Johnson", 20, 23);            
worker1.showSalary();
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
//console.log(worker1.fullName + " salary " +worker1.salaryExp)
worker1.setExp = 1.5;
worker1.experience=1.5;
console.log("New experience: " + worker1.experience);
let salary1=worker1.showSalaryWithExperience();
let worker2 = new Worker("Tom Tomson", 48, 22);
//worker2.showSalary();
//worker2.experience=1.5;
//let salary2=worker2.showSalaryWithExperience();
let worker3 = new Worker("Andy Ander", 29, 23);
//worker3.showSalary();
//worker3.experience=1.5;
//let salary3=worker3.showSalaryWithExperience();
//let array =[salary1,salary2,salary3];
//console.log(array.sort(function(a,b){return a-b}))  */

    



//task5
  class GeometricFigure{
      getArea() {
          return 0;
      }
      toString() {
        return 'GeometricFigure'+Object.getPrototypeOf(this).constructor.name;
   }
  }
  class Triangle extends GeometricFigure{
      constructor(width,height){
          super()
          this.width=width;
          this.height=height;    
      }
      getArea(){
         return this.height*this.width/2;
      }
    }
  class Square extends GeometricFigure{
    constructor(side){
        super()
        this.side=side;
    }
    getArea(){
       return this.side*this.side;  
    }
}
class Circle extends GeometricFigure{
    constructor(radius){
        super()
        this.radius=radius;
    }
    getArea(){
        return Math.PI*Math.pow(this.radius,2);
    }
}
let figures=[new Triangle(4,5), new Square(7),new Circle(5)];
function handleFigures(figures){
    let total=0;
    for (let i=0; i<figures.length;i++){
    if (figures[i] instanceof GeometricFigure)
    {
    let figure=figures[i].toString();
    let area=figures[i].getArea();
    total+=area;
    console.log(figure+'-area:'+area)
    }
}
console.log('Total area:'+total)
}
handleFigures(figures)             