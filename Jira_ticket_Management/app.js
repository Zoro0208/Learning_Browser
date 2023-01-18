
// const allColors=document.querySelectorAll(".color");


const lock=document.querySelector(".lock");
const unlock=document.querySelector(".unlock");
const deleteBtn=document.querySelector(".delete ");

let isLocked=false;
let isdelete=false;


// for(let i=0;i<allColors.length;i++){
 
//      allColors[i].addEventListener("click",changeColor);
// }

// function changeColor(e){

//    //**********e.currentTarget refers the element on which event has occured**************
//    let elem= e.currentTarget;
//   //    console.log(elem);
//    let allClasses=elem.classList;
// //    console.log(elem," ",allClasses);
//    let color=allClasses[1];
// //    console.log(color);
// main.style.backgroundColor=color;   
   
// }




deleteBtn.addEventListener("click",deleteFn);

// *****************LOCK UNLOCK************

lock.addEventListener("click",lockFn)
unlock.addEventListener("click",unlockFn)



//******************************************* */

function lockFn(){
    isLocked=true;
    disableEdit();
}

function unlockFn(){
   isLocked=false;
   showAll();
   enableEdit();
}

function deleteFn(){
   if(isLocked==true){
      alert("First unlock it");
      return;
   }
   if(isdelete==false){
      isdelete=true;
   }else{
      isdelete=false;
   }

}

function enableEdit(){
   let allTicket=document.querySelectorAll(".ticket");

   for(let i=0;i<allTicket.length;i++){
      let textarea=allTicket[i].querySelector("textarea");
      textarea.removeAttribute("readonly","");
   }
}

function disableEdit(){
   let allTicket=document.querySelectorAll(".ticket");

   for(let i=0;i<allTicket.length;i++){
      let textarea=allTicket[i].querySelector("textarea");
      textarea.setAttribute("readonly","");
   }
}