

const main=document.querySelector(".main");
const addBtn=document.querySelector(".add");

addBtn.addEventListener("click",function(){
    if(isLocked==true){
       alert("First unlock it");
       return;
    }
  
    createTcket();
 })

 //ticket creation
 function createTcket(){
    let id = uuidv4()
 // main-> add ticket
 let ticket=document.createElement("div");
 ticket.setAttribute("class","ticket");
 ticket.innerHTML=`<div class="ticket_header black"></div>
 <div class="ticket_content">
     <div class="ticket_id">
        #${id}
     </div>
    <textarea name="" id="" cols="30"  rows="10"></textarea>
 </div>`
    main.appendChild(ticket);
 
    //change color of header->header pe click karke
    let header=ticket.querySelector(".ticket_header");
    header.addEventListener("click",changeColor)
    ticket.addEventListener("click",deleteTicket);
 
 }
 
 function changeColor(e){
       
    if(isLocked==true){
       alert("First unlock it");
       return;
    }
 
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

 function deleteTicket(e){
   
    if (isdelete==true&&isLocked==false){
    e.currentTarget.remove();
 }
 }
 