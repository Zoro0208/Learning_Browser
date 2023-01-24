
//Set value 
for(let i=0;i<cells.length;i++){

    cells[i].addEventListener("blur",function(){
        let {rid,cid}=getRidCidFromUI(cells[i]);
        db[rid][cid].value=cells[i].innerText;
    })
}

//set Formula
const formulaBar=document.querySelector(".formula_bar");
    formulaBar.addEventListener("keypress",function(e){
        if(e.key=="Enter"&&formulaBar.value!=""){
             // console.log(e.key);
         formula=formulaBar.value;
         let cCell=addressBarVal.value;
         let {rid,cid}=getRidCidFromAddressBar();
         let dbCell=db[rid][cid];
         let oldFormula=dbCell.formula;
         if(oldFormula==formula){
            return;
         }

        //  if(oldFormula!=""){
        //     removeFormula(dbCell,cCell)
        //  }
        //  console.log(formula);
         let ans=evaluate(formula);
        //  console.log(ans)
         setUI(ans,rid,cid);
         setFormulaInDb(formula,rid,cid,ans);

        }
       

    })


    function getRidCidFromUI(uiCell){
        // console.log(uiCell," ",uiCell.innerText);
        let rid=uiCell.getAttribute("rid");
        let cid=uiCell.getAttribute("cid");
        return {rid ,cid};
    }

    function evaluate(formula){
        //parse-->>( A1 + A2 )-->>get cells from formula
        //( A1 + A2 )-->>split(" ")->[(,A1,+,A2,)]
        let formulaEntities=formula.split(" ");
        for(let i=0;i<formulaEntities.length;i++){
            let cEntity=formulaEntities[i];
            //get the entity whose first charcter is alphabet
           let ascci= cEntity.charCodeAt(0);

           if(ascci>=65&&ascci<=90){
            //this is oue cell
            //replace the alpdabet value in cell from numder
            let{rid,cid}=getRidCidFromStringAddress(cEntity);
            let value=db[rid][cid].value;
            console.log(value);
            formulaEntities[i]=value
           }

        } 

        let formulaToEvaluate=formulaEntities.join("");
        console.log("formulaToEvaluate",formulaToEvaluate);

        let ans=eval(formulaToEvaluate);
        return ans;
    }

    function setUI(ans,rid,cid){
        let cell=document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
        cell.innerText=ans;

    }

    function setFormulaInDb(formula,rid,cid,ans){
        db[rid][cid].formula=formula;
        db[rid][cid].value=ans;

    }

    function getRidCidFromStringAddress(stringAddress){
        console.log(stringAddress);

    let colchar=stringAddress.charCodeAt(0);
    let rowNumber=stringAddress.substr(1);

    let rid=Number(rowNumber) - 1;
    let cid=Number(colchar) - 65;

    return {"rid":rid,
            "cid":cid};
}