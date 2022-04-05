let but= document.querySelector("#button");
let but1= document.querySelector("#button1");
let but2 = document.querySelector("#button2");
let but3= document.querySelector("#button3");
let but4= document.querySelector("#button4");

const main=document.querySelector("center");

const getBGcolor= function (selectedElement){
    return window.getComputedStyle(selectedElement).backgroundColor;
}
var orangecolor=getBGcolor(but2);
    but2.addEventListener("click",function(){
    main.style.background=orangecolor;
} )



//  const color = (elements,color)=>{
//      return 
//  }