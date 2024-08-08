const colors=["red","green","yellow","#purple","pink","brown"]
const click=document.getElementById("click")
const color=document.getElementById("color")

function changecolor(){
    //numbers 0-5
    const numbers=getNumber();
    document.body.style.backgroundColor=colors[numbers];
    colors.textContent=colors[numbers]
}
function getNumber(){
    return Math.floor(Math.random()*colors.length)
}