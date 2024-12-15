let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
let textAlert=document.getElementById("validy");
let signUpBtn=document.getElementById("signup");
let logInBtn=document.getElementById("loginBtn");
let loginForm=document.querySelector("form");
// regex
let emailRegex =  /^\w+@(gmail)\.com$/;
let passwordRegex = /^[a-zA-Z0-9]{3,50}$/



//the condition is emailRegex.test(emailInput.value)
emailInput.addEventListener("input", function () {
    checkInput(emailInput, emailRegex.test(emailInput.value))
 })

 passwordInput.addEventListener("input", function () {
    checkInput(passwordInput, passwordRegex.test(passwordInput.value))
 })


// this function to show the vaild and invalid
// array to store users 
let newUsers=[]
// local storge function 
if(localStorage.getItem("loggedUsers" )!=null){
  newUsers= JSON.parse(localStorage.getItem('loggedUsers'))
}

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

function checkUser(){

loginEmail=emailInput.value;
loginPassword=passwordInput.value;


 for(let i =0 ; i< newUsers.length ; i++){
  if(loginEmail==newUsers[i].userEmail && loginPassword == newUsers[i].userPassword ){
    window.location.href ="html/welcome.html"
    return true;
    }else{
      textAlert.innerHTML=`<p class="mt-3 mb-4 text-center text-danger">error</p>`
    }
}


// var emailBool = checkInput(emailInput, emailRegex.test(emailInput.value))
// var passwordBool = checkInput(passwordInput, passwordRegex.test(passwordInput.value))
// if(emailBool && passwordBool){
// allUsers.push(loggeduser);
// console.log(allUsers);
// localStorage.setItem("loggedUsers", JSON.stringify(allUsers))
//     validy.innerHTML = `<p class="mt-3 mb-4 text-center text-success">Success</p>`;
//     window.location.href="./html/welcome.html";
    
// }
// else if (!emailBool && !passwordBool)
//      {
//     validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">all inputs are invalid</p>`;
//   } 
//   else if (!passwordBool) {
//     validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">The password is invalid</p>`;
//   } 
//   else if (!emailBool) {
//     validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">The email is invalid</p>`;
    
//   } 
  // clr()
  }



loginForm.addEventListener("submit", function(e){
e.preventDefault()
checkUser()
})

// function clr() {
  
//     emailInput.value = "";
//     passwordInput.value = "";
//   }

  signUpBtn.addEventListener("click",function(){
    window.location.href="./html/signup.html"
  })
