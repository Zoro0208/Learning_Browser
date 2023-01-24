
function init(){

    let topRow=document.querySelector(".top_row")
   let leftCol=document.querySelector(".left_col")
   let grid=document.querySelector(".grid");

    //left column ke cells 
for(let i=1;i<=100;i++){
    //create cell
    let div=document.createElement("div");
    div.setAttribute("class","cell");
    div.textContent=i;
    leftCol.appendChild(div);
}

//top row ke cells
for(let i=1;i<=26;i++){
    let div=document.createElement("div");
    div.setAttribute("class","cell");
    div.textContent=String.fromCharCode(i+64);
    topRow.appendChild(div);
}

//grid
for(let i=0;i<100;i++){

      let row=document.createElement("div")
      row.setAttribute("class","row")

    for(j=0;j<26;j++){
        let col=document.createElement("div");
        col.setAttribute("class","cell");
        // col.textContent=`${String.fromCharCode(64+j)}-${i}`
        col.setAttribute("contenteditable","true")
        col.setAttribute("rid",i);
        col.setAttribute("cid",j);
        row.appendChild(col)
    }
    grid.appendChild(row);
}
}

//sheet logic

//first sheet
let firstSheet=document.querySelector(".sheet");
firstSheet.addEventListener("click",changeSheet);

//new sheet
let addBtn=document.querySelector(".add_sheet");
let sheetSubContainer=document.querySelector(".sheet_sub");



addBtn.addEventListener("click",function(){
    //get allsheets
    let allSheets=document.querySelectorAll(".sheet");
    //last sheet
    let lastSheet=allSheets[allSheets.length - 1];
    let myId=lastSheet.getAttribute("myId");
    let newid=Number(myId)+1;
    let newSheet=document.createElement("div");
     newSheet.setAttribute("class","sheet");
     newSheet.setAttribute("myId",`${newid}`);
     newSheet.innerText=`Sheet ${newid+1}`;
     sheetSubContainer.appendChild(newSheet);
     newSheet.addEventListener("click",changeSheet)
})

function changeSheet(e){
    let newSheet=e.currentTarget;
    let allSheets=document.querySelectorAll(".sheet");
    for(let i=0;i<allSheets.length;i++){
        allSheets[i].classList.remove("cur_sheet");
    }
    //set current sheet on ui
    newSheet.classList.add("cur_sheet");
}



//create 2D db->>>to represent every cell in the grid

let db=[];

function initDb(){
    for(let i=0;i<100;i++){
        let rowArr=[];
        for(let j=0;j<26;j++){
            let cellObj={
                fontFamily:"Arial",
                fontSize:"16",
                isBold:false,
                isItalic:false,
                isUnderline:false,
                cAlignment:"justify",
                formula:" ",
                value:" "
            }
            rowArr.push(cellObj)
        }
        db.push(rowArr);
    }
}


     
init();

initDb();