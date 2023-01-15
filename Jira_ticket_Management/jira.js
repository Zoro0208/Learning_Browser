// let pink=document.querySelector(".pink");

// pink.addEventListener("click",function(){
//     let body=document.querySelector("body")
//     body.style.backgroundColor="lightpink";
// })


let allColors=document.querySelectorAll(".color");
let main=document.querySelector(".main")

for(let i=0;i<allColors.length;i++){
 
     allColors[i].addEventListener("click",changeColor);
}

function changeColor(e){

   // e.currentTarget refers the element on which event has occured
   let elem= e.currentTarget;
  //    console.log(elem);
   let allClasses=elem.classList;
//    console.log(elem," ",allClasses);
   let color=allClasses[1];
//    console.log(color);
main.style.backgroundColor=color;
   
}