function calkRectangleArea(width,height){
         if (typeof width==='number' && typeof height==='number'&&
         width>0 && height>0){
         let recta=width*height;
         console.log(recta);
        return recta;     //перевіряємо чи число і чи додатнє
            
        } else  {
            console.log ('Ви ввели не коректні дані');} //якщо введено некоректні дані
        }
        try { calkRectangleArea(width,height);//  виконується функція, якщо все ок
            
        } catch (error) {               //якщо не ок-опис можливоі помилки
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);             
        }   
     calkRectangleArea(6,8)                       //task1  


        function checkAge(){
            let age=prompt ('What is your age',14);
            
            try {
                if(age=="")   throw " empty field";              
                if(isNaN(age))   throw " not number";
                age=Number(age);
                if(age<14) throw " too yunger age";
                else alert('Welcome! You have access to watch the movie')
            }
            catch(error){
    alert ("You input"+error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);       
            }                
           }  
        
        checkAge()               //  task2  



class MonthException{
    constructor (message){
    this.name=MonthException;
        }
        }
function showMonthName(month){
    try {
        if(month<=12 &&month>0){
            switch(month){
            case 1:
            alert ("January");
             break;
            case 2:
             alert ('February'); break;
             case 3:
             alert ('March'); break;
             case 4:
             alert ('April'); break;
             case 5:
             alert ('May'); break;
             case 6:
             alert ('June'); break;
             case 7:
             alert ('July'); break;
             case 8:
             alert ('August'); break;
             case 9:
             alert ('September'); break;
             case 10:
             alert ('October'); break;
             case 11:
             alert ('Nowebber'); break;
            default:
            alert('December'); break;
        }
    }
       else throw 'error'
       return
       }
    catch (error) {
        let MonthException1= new MonthException("Exception")
       alert(MonthException.name+'! Incorrect month number')
    }
    }
console.log(showMonthName(14) )                     //task3!

           
    
        

function showUser(id){
    let userObject={
        id:""
   }
  try{ 
       if (id>=0) {
         userObject.id=id;
       }
    else throw 'error'
        return userObject;
    } catch  ( error){
        console.log('Error:ID must not be negative' +id)
    }    
    }
function showUsers(ids){
    let usersArray=[]
    for ( let i=0; i<=ids.length-1; i++){
        let userObject =showUser(ids[i])
        if (userObject){
            usersArray.push(userObject);
        }
    }
        return usersArray;
}
console.log(showUsers([7, -12, 44, 22]))   //task 4 
