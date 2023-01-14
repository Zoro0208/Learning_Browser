//button
let btn=document.querySelector("button");

//input
let input=document.querySelector("input");

// ul
let ul=document.querySelector("ul")

//add event listner to button

btn.addEventListener("click",fn);

function fn(){

let task=input.value;

if(task){
   taskCreator(task);
}
else{
    alert("Enter some task");
}
}

function taskCreator(task){
    let div=document.createElement("div");
    let cross=document.createElement("button");
    cross.textContent="X";
    let li=document.createElement("li");
    li.textContent=task;
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(cross);
    input.value="";

    //to delete a task
    cross.addEventListener("click",function(){
        div.remove();
    });
}