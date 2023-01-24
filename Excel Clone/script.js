
//Address bar implementation
let cells=document.querySelectorAll(".grid .cell");
let addressBarVal=document.querySelector(".address_bar");

//Sare grid ke cells pe event listener apply karo
for(let i=0;i<cells.length;i++){
      //when a cell is clicked -> get the element
    cells[i].addEventListener("click",function(){
        let cCell=cells[i];
        // console.log(cCell)
        //get the rid ,cid ->convert bont into adress
        let rid=Number(cCell.getAttribute("rid"));
        let cid=Number(cCell.getAttribute("cid"));
       let address=String.fromCharCode(cid+65)+(rid+1)
     

       //put address in address bar
       addressBarVal.value=address;

       setMenuBar(rid,cid);
    })
}


function setMenuBar(rid,cid){
 
    let cellObj=db[rid][cid];

    //boldbutton
    if(cellObj.isBold){
        boldBtn.classList.add("selected");
    }else{
        boldBtn.classList.remove("selected");
    }

    //itlaicButton
    if(cellObj.isItalic){
        italicBtn.classList.add("selected");
    }else{
        italicBtn.classList.remove("selected");
    }

    //underlinButton
    if(cellObj.isUnderline){
        underlineBtn.classList.add("selected");
    }else{
        underlineBtn.classList.remove("selected");
    }

    // font size
    selectFontSIze.value=cellObj.fontSize;
    //  

    //font family
    console.log(cellObj.fontFamily);
    selectFontFamily.value=cellObj.fontFamily;

    //unknown errer herre oif remove below line webpge wont respond
    h.value=cellObj.fontFamily;


    for(let i=0;i<alignmentBtn.length;j++){
        alignmentBtn[i].classList.remove("selected");
        // alignmentBtn[i].classList.remove("active");
    } 

    for(let i=0;i<alignmentBtn.length;j++){
        let isCurrent=alignmentBtn[i].classList[2];
        if(isCurrent==cellObj.cAlignment){
            alignmentBtn[i].classList.add("selected");
            // alignmentBtn[i].classList.add("active")

        }
    }

    //set formula
    let formula=cellObj.formula;
    formulaBar.value=formula;


}