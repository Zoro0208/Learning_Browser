// let pink=document.querySelector(".pink");

// pink.addEventListener("click",function(){
//     let body=document.querySelector("body")
//     body.style.backgroundColor="lightpink";
// })


// const allColors=document.querySelectorAll(".color");
const main=document.querySelector(".main");
const addBtn=document.querySelector(".add");
const colors=["pink","blue","green","black"]

// for(let i=0;i<allColors.length;i++){
 
//      allColors[i].addEventListener("click",changeColor);
// }

// function changeColor(e){

//    // e.currentTarget refers the element on which event has occured
//    let elem= e.currentTarget;
//   //    console.log(elem);
//    let allClasses=elem.classList;
// //    console.log(elem," ",allClasses);
//    let color=allClasses[1];
// //    console.log(color);
// main.style.backgroundColor=color;   
   
// }

addBtn.addEventListener("click",function(){
   createTcket();
})

function createTcket(){
   let id = uuidv4()
// main-> add ticket
let ticket=document.createElement("div");
ticket.setAttribute("class","ticket");
ticket.innerHTML=`<div class="ticket_header pink"></div>
<div class="ticket_content">
    <div class="ticket_id">
       #${id}
    </div>
   <textarea name="" id="" cols="30"  rows="10"></textarea>
</div>`
   main.appendChild(ticket);

   //change color of header->header pe click karke
   const header=document.querySelector(".ticket_header");
   header.addEventListener("click",changeColor)

}

function changeColor(e){
    let header=e.currentTarget;
    let Classes=header.classList;
    let currColor=Classes[1];
   //  alert(currColor);

   let cIdx=0;
   for(let i=0;i<colors.length;i++){
      if(currColor==colors[i]){
         cIdx=i;
         break
      }
   }
   let nextIdx=(cIdx+1)%colors.length;
   let nxtCOlor=colors[nextIdx];
   header.classList[1]=nxtCOlor; 
   Classes.remove(currColor);
   Classes.add(nxtCOlor);
   

}