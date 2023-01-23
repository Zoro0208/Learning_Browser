//font Size
let selectFontSIze=document.querySelector(".select_f_size");
console.log(selectFontSIze.value);
selectFontSIze.addEventListener("change",function(){
    let fontSizee=selectFontSIze.value;
    
// console.log(fontSizee)

     //get address from address Bar inform of rid and cid
   let {rid,cid}= getRidCidFromAddressBar();

   //address of cell selected get from ui
   let cell=document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
   let dbCellObj=db[rid][cid];

//    console.log(rid +"" +cid);

   //setv font style or size
   cell.style.fontSize = fontSizee + "px";
   dbCellObj.fontSize=fontSizee;
})

// font style
const selectFontFamily =document.querySelector(".select_f_family");
console.log(selectFontFamily);
selectFontFamily.addEventListener("change",function(){

    let fontstylee=selectFontFamily.value;
    let {rid,cid}= getRidCidFromAddressBar();
    let dbCellObj=db[rid][cid];
    // let cellToBeChanged=getcell();
    let cellToBeChanged=document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
   
    cellToBeChanged.style.fontFamily=fontstylee;
    dbCellObj.fontFamily=fontstylee;
})



/// to make text bold---->>>>
let boldBtn=document.querySelector(".fa-bold");
boldBtn.addEventListener("click",function(){
    let isSelected=boldBtn.classList[2];
    //where to change
    let cellToBeChanged= getcell();
    let{rid,cid}=getRidCidFromAddressBar();
    let dbCellObj=db[rid][cid];
    //do the change
    if(isSelected=="selected"){
        boldBtn.classList.remove("selected");
        cellToBeChanged.style.fontWeight="normal";
        boldBtn.classList.remove("active")
        //db cell isbold property update
        dbCellObj.isBold=false;
    }else{
        boldBtn.classList.add("selected");
        cellToBeChanged.style.fontWeight="bold";
        boldBtn.classList.add("active")
        //db cell isbold property update
        dbCellObj.isBold=true;
    }
})

//to make text italic
let italicBtn=document.querySelector(".fa-italic");
italicBtn.addEventListener("click",function(){
    let isSelected=italicBtn.classList[2];
    //where to change
    let cellToBeChanged= getcell();
    let{rid,cid}=getRidCidFromAddressBar();
    let dbCellObj=db[rid][cid];
    //do the change
    if(isSelected=="selected"){
        italicBtn.classList.remove("selected");
        cellToBeChanged.style.fontStyle="normal";
        italicBtn.classList.remove("active")
        //db cell isbold property update
        dbCellObj.isItalic=false;
    }else{
        italicBtn.classList.add("selected");
        cellToBeChanged.style.fontStyle="italic";
        italicBtn.classList.add("active")
        //db cell isbold property update
        dbCellObj.isItalic=true;
    }
})

//to make text underline
let underlineBtn=document.querySelector(".fa-underline");
underlineBtn.addEventListener("click",function(){
    let isSelected=underlineBtn.classList[2];
    //where to change
    let cellToBeChanged= getcell();
    let{rid,cid}=getRidCidFromAddressBar();
    let dbCellObj=db[rid][cid];
    //do the change
    if(isSelected=="selected"){
        underlineBtn.classList.remove("selected");
        cellToBeChanged.style.textDecoration="none";
        underlineBtn.classList.remove("active");
        //db cell isbold property update
        dbCellObj.isUnderline=false;
    }else{
        underlineBtn.classList.add("selected");
        cellToBeChanged.style.textDecoration="underline";
        underlineBtn.classList.add("active");
        //db cell isbold property update
        dbCellObj.isUnderline=true;
    }
})


//allignment ka code
let alignmentBtn=document.querySelectorAll(".alignment_container i ");


for(let i=0;i<alignmentBtn.length;i++){
    alignmentBtn[i].addEventListener("click",function(){

        let cElem=alignmentBtn[i];

        //remove selected class from every elemnt
        for(let j=0;j<alignmentBtn.length;j++){
            alignmentBtn[j].classList.remove("selected")
            // alignmentBtn[j].classList.remove("active")
        }
        cElem.classList.add("selected");
        let alignment=cElem.classList[2];
        // cElem.classList.add("active")
        
        //ui pe change
        let cellToBeChanged=getcell();
        cellToBeChanged.style.textAlign=alignment;
    
        //db update
        let{rid,cid}=getRidCidFromAddressBar();
        let dbCellObj=db[rid][cid];
        dbCellObj.cAlignment=alignment;
       
    })
   
}


function getcell(){
    //get address from address Bar inform of rid and cid
  let {rid,cid}= getRidCidFromAddressBar();

  //address of cell selected get from ui
  let cell=document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);

  return cell;
}

function getRidCidFromAddressBar(){
    let address=addressBarVal.value;
    console.log(address);
    return convertAddressToRidCid(address);

}

function convertAddressToRidCid(address){

    let colchar=address.charCodeAt(0);
    let rowNumber=address.substr(1);

    let rid=Number(rowNumber) - 1;
    let cid=Number(colchar) - 65;

    return {"rid":rid,
            "cid":cid};
}

