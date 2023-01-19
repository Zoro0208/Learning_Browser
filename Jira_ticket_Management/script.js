

const main=document.querySelector(".main");
const addBtn=document.querySelector(".add");

addBtn.addEventListener("click",function(){
    if(isLocked==true){
       alert("First unlock it");
       return;
    }
  
    handleCreation();
 })

 function handleCreation(){
   isdelete=false;

   let id = uuidv4();

   //logic creatin the box
   createModal(id);
 }

 function createModal(id){
   let cColor="black";
   let modal=document.createElement("div");
   modal.setAttribute("class","modal");
   modal.innerHTML=`
 <textarea class="content_area"
  placeholder="Enter some Task"></textarea>
<div class="pallet_container">
   <div class="pallet_color pink"></div>
   <div class="pallet_color blue"></div>
   <div class="pallet_color green"></div>
   <div class="pallet_color black"></div>
</div>`
    main.appendChild(modal);

    //get color
    let allColors=modal.querySelectorAll(".pallet_color");
    for(let i=0;i<allColors.length;i++){
      allColors[i].addEventListener("click",function(e){
         cColor=allColors[i].classList[1];
      })
    }

    //get text after pressing enter
    modal.addEventListener("keypress",function(e){

      let key=e.key;
      if(key=="Enter"){
      let textarea=modal.querySelector("textarea");
      let text=textarea.value;
      //destory modal
      modal.remove();
      //return text and color
      createTcket(id,cColor,text);
      }
    })


 }

 //ticket creation
 function createTcket(id,color,text){
    
  
 // main-> add ticket
 let ticket=document.createElement("div");
 ticket.setAttribute("class","ticket");
 ticket.innerHTML=`<div class="ticket_header ${color}"></div>
 <div class="ticket_content">
     <div class="ticket_id">
        #${id}
     </div>
    <textarea name="">${text}</textarea>
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
 