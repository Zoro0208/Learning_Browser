// **************Read*****************************

//querySelector only return the first matching element
let elem=document.querySelector(".next_h1");
console.log(elem);

//array of elements 
let allH1=document.querySelectorAll("h1");
console.log(allH1);

//content get 
// input type of value -> where user set's the data
let inputElem=document.querySelector("input");
console.log(inputElem.value);
//rest of html elems
let para=document.querySelector("p");
let text=para.textContent;
console.log(text);

// get attributes
let anchorElem=document.querySelector("a");
let output=anchorElem.getAttribute("href");
console.log(output);

// *****************CREATE******************

//create p tag
let pEle=document.createElement("p");
//put content
pEle.textContent="Hello Dom";
//place it in Dom tree
let body=document.querySelector("body");
body.appendChild(pEle);

//styling
pEle.style.backgroundColor="lightgreen";