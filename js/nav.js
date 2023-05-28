const btnBars=document.getElementById("btnBars");
const listnavbar=document.getElementById("listnavbar");
btnBars.onclick=function(){
   
    if( listnavbar.style.display==="flex"){
        listnavbar.style.display="none";
    }else{
        listnavbar.style.display="flex";
    }
}
window.addEventListener('resize',function(){
    const w = window.innerWidth
    if(w>=1023){
        listnavbar.style.display="flex";
    }else{
        listnavbar.style.display="none"; 
    }
})