
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



//create 2D db->>>to represent every cell in the grid

let db=[];

function initDb(){
    for(let i=0;i<100;i++){
        let rowArr=[];
        for(let j=0;j<26;j++){
            let cellObj={
                fontFamily:"Courier New",
                fontSize:"16",
                isBold:false,
                isItalic:false,
                isUnderline:false,
                cAlignment:"justify",
                formula:"",
                value:""
            }
            rowArr.push(cellObj)
        }
        db.push(rowArr);
    }
}

     
init();

initDb();