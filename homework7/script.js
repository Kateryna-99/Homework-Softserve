//task1/*


   let newWindow;

function openWin() {

    newWindow = window.open("", "", "width=300, height=300");

    setTimeout(function () {
        newWindow.resizeTo(500, 500)
        moveWindow()
    }, 3000);

    function moveWindow() {
        setTimeout(function () {
            newWindow.moveTo(200, 200);
            closeWindow()
        }, 2000);
    }

    function closeWindow() {
        setTimeout(function () {
            newWindow.close()
        }, 2000);
    }
}

openWin()


//task2
document.getElementById("btn").onclick = changeCSS;
function changeCSS() {
    text.style.color="orange";
    text.style.fontSize="20 px";
    text.style.fontFamily="Comic Sans MS";

}

//task3
document.getElementById("btn1").onclick = function(){
    btn1.style.color="blue";
};
document.getElementById("btn2").ondblclick= function(){
page.style.backgroundColor="pink";
};
document.getElementById("btn3").onmousedown = function(){
    page.style.backgroundColor="brown";
};
document.getElementById("btn3").onmouseup = function(){
    page.style.backgroundColor="white";
};
document.getElementById("text").onmouseenter = function(){
    page.style.backgroundColor="yellow";
};
document.getElementById("text").onmouseleave = function(){
    page.style.backgroundColor="white";
};





 //task4
   function deleteElement(){
    selectobject=document.getElementById('first');
       for (let i=0; i<selectobject.length; i++){
        if(selectobject.options[i].selected){
          selectobject.remove(i);
          break; 
        }
        }
   }
   myBtn.addEventListener("click", deleteElement);




   //task5
   
   myButton.addEventListener("click",function(){
       let newP=document.createElement('p')
newP.id="click";
newP.innerHTML= "<p>I was pressed!</p>";
let newDiv=document.getElementById("text");
newDiv.appendChild(newP)})

myButton.addEventListener("mouseenter",function(){
    let newP=document.createElement('p')
newP.id="mouseenter";
newP.innerHTML= "<p>Mouse on me!</p>";
let newDiv=document.getElementById("text");
newDiv.appendChild(newP)})


myButton.addEventListener("mouseleave",function(){
    let newP=document.createElement('p')
newP.id="mouseleave";
newP.innerHTML= "<p>Mouse is not on me!</p>";
let newDiv=document.getElementById("text");
newDiv.appendChild(newP)})




//task6

sizing();
window.addEventListener('resize',sizing);
function sizing(){
    document.querySelector('.width').innerText=
    document.documentElement.clientWidth;
    document.querySelector('.height').innerText=
    document.documentElement.clientHeight;
}


//task7


let ger=new Array("Berlin","Munchen","Drezden");
let usa=new Array("New York", "Los Angeles", "Chicago");
let ukr=new Array("Kyiv", "Lviv", "Dnipro");

function AddOptionToSelect(){
    let CountryObj=document.getElementById("country");
    let CitiesObj=document.getElementById("cities");
   let selec=CountryObj.options.selectedIndex;
    switch(selec)
    {
            case 0:
            CitiesObj.options.lenght=0;   
            for (let n=0; n<ger.length; n++){
                CitiesObj[n]=new Option(ger[n],n);
           }
            break;
           case 1:
            CitiesObj.options.lenght=0;
            for (let n=0; n<usa.length; n++){
                CitiesObj[n]=new Option(usa[n],n);
            } break;
            case 2:
            CitiesObj.options.lenght=0;
            for (let n=0; n<ukr.length; n++){
                CitiesObj[n]=new Option(ukr[n],n);
            } break;
    }
    function result (){
    let txt = document.getElementById("country").options[selec].text;
    let txt1 = document.getElementById("cities").options[selec].text;
    let  p=document.getElementById("result");
    p.innerHTML=txt+ "," + txt1
   }
  result();
}
AddOptionToSelect()

