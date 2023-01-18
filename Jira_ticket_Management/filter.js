

const colors=["pink","blue","green","black"]
const colorboxes=document.querySelectorAll(".color_boxes");

for(let i=0;i<colorboxes.length;i++){
    colorboxes[i].addEventListener("click",filterTicket);
 }
 

 // ******Change background color of colorboxes*********

//toggle multiple options
function filterTicket(e){
    if(isLocked==false){
       alert("First lock it");
       return;
    }
  
 
    let elem=e.currentTarget
    let childElemArr=elem.children;
    let clickedColor=childElemArr[0].classList[1];
 
    let secClass=elem.classList[1];
    if(secClass=="clicked"){
       elem.classList.remove("clicked")
 
       showAll();
    }else{
          
       for(let i=0;i<colorboxes.length;i++){
         colorboxes[i].classList.remove("clicked")
        }
    elem.classList.add("clicked");
 
    showOnlyMyColor(clickedColor);
 }
 } 
 
 function showOnlyMyColor(clickedColor){
    //get all tickets
    let allTicket=document.querySelectorAll(".ticket");
 
    //check there heading
    for(let i=0;i<allTicket.length;i++){
       let header=allTicket[i].children[0];
       let headerColor=header.classList[1];
       
       if(headerColor==clickedColor){
          //show
          allTicket[i].style.display="block";
       }else{
          //hide
          allTicket[i].style.display="none";
       }
    }
 }

 
function showAll(){

    let allTicket=document.querySelectorAll(".ticket");
 
    for(let i=0;i<allTicket.length;i++)
           //show
          allTicket[i].style.display="block";
 
          for(let i=0;i<colorboxes.length;i++){
             colorboxes[i].classList.remove("clicked")
            }
    
 }