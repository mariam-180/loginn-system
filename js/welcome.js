let logout=document.getElementById("logout")
let welcomepage = document.querySelector("#welcomepage")




let newUsers=[]
// local storge function 
if(localStorage.getItem("loggedUsers" )!=null){
  newUsers= JSON.parse(localStorage.getItem('loggedUsers'))
}
for(let i =0 ; i<newUsers.length ; i++){
    welcomepage.innerHTML= newUsers[i].userName;
}








logout.addEventListener("click",function(){
    window.location.href="../index.html"
})