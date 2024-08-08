const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.querySelector("#click")
const color=document.querySelector("#col")
btn.addEventListener("click" ,function(){
    let hexColors="#";
    for (i=0;i<6;i++){
        hexColors+=hex[getNumber()]
    }
    color.textContent=hexColors;
    document.body.style.backgroundColor=hexColors;
})
function getNumber(){
    return Math.floor(Math.random()*hex.length)
}