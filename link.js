var idval=document.getElementById('ip');
var ins=document.querySelector('#ins_but');
var scr=document.getElementById('screen');
ins.addEventListener("click",Addnew);

function Addnew(){
    var newNode=document.createElement("div");
    // console.log("add");
    if(idval.value=="")
    {
        alert("pleace enter value.");
        return;
    }
    newNode.classList.add("NodeDes","addDiv");
    // newNode.classList.add("addDiv"); 
    // newNode.style.
    // newNode.classList.add("addDiv");
    
    // newIn.classList.add("addDiv");
    newNode.textContent=idval.value;
    idval.value="";    
    
    scr.appendChild(newNode);
}
