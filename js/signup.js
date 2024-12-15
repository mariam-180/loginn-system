let signupForm = document.getElementById("signupForm")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let textAlert=document.getElementById("validy"); 
let signIn=document.getElementById("signin")
let loginBtn=document.getElementById("loginBtn")
let nameRegex = /^[a-zA-Z]{3,50}$/
let emailRegex = /^\w+@(gmail)\.com$/;
let passwordRegex = /^[a-zA-Z0-9]{3,50}$/


//nameinput not nameinput.value
 nameInput.addEventListener("input", function(){
checkInput(nameInput, nameRegex.test(nameInput.value))
 })

 emailInput.addEventListener("input", function () {
    checkInput(emailInput, emailRegex.test(emailInput.value))
 })
 
 passwordInput.addEventListener("input", function () {
    checkInput(passwordInput, passwordRegex.test(passwordInput.value))
 })


//  validation function 
function checkInput(input,condition){
    if(condition){
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true
     } else {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        return false
     }
}

// array to store users 
let newUsers=[]
// local storge function 
if(localStorage.getItem("loggedUsers" )!=null){
  newUsers= JSON.parse(localStorage.getItem('loggedUsers'))
}

function addUser(){

let newUser={
  userName: nameInput.value,
  userEmail: emailInput.value,
  userPassword:passwordInput.value,
}
if(exicted()== true ){
  textAlert.innerHTML=`<p class="mt-3 mb-4 text-center text-danger show">input is already exicted</p>`

}else{
  newUsers.push(newUser);
  localStorage.setItem("loggedUsers", JSON.stringify(newUsers));
  console.log(localStorage.getItem("loggedUsers"))
   textAlert.innerHTML=`<p class="mt-3 mb-4 text-center text-success show">success</p>`
   window.location.href = "../index.html";
  
       

   
} 
var nameBool = checkInput(nameInput, nameRegex.test(nameInput.value))
var emailBool = checkInput(emailInput, emailRegex.test(emailInput.value))
var passwordBool = checkInput(passwordInput, passwordRegex.test(passwordInput.value))

// we didnt do a property for repassword is for validation not for storing in the user data
      if (!nameBool && !emailBool && !passwordBool)
         {
        validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger show">all inputs are invalid</p>`;
      } 
      else if (!passwordBool) {
        validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">The password is invalid</p>`;
      } 
      else if (!emailBool) {
        validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">The email is invalid</p>`;
      } 
     // clr()
      }
     
function exicted(){
  for( let i = 0; i< newUsers.length; i++ )
  if(newUsers[i].userEmail == emailInput.value){
    return true;
  }
}

signupForm.addEventListener("submit" ,function (e){
  e.preventDefault()
  addUser();
} )

signIn.addEventListener("click",function(){
  window.location.href="../index.html";})




         