//signup inputs
var input1 = document.getElementById("userName");
var input2 = document.getElementById("userEmail");
var input3 = document.getElementById("userPassword");
//end

//login inputs
var inputLE = document.getElementById("userLEmail")
var inputLP = document.getElementById("userLPassword")
//end

var btnSign = document.getElementById("signupbtn");
var btnLogin = document.getElementById("loginBtn");
var massege = document.getElementById("massegeBox");

//login masseges
var emptyLogin = document.getElementById("empty");
var incorrectLogin = document.getElementById("incorrect");
//end
//signup masseges
var emptySignup = document.getElementById("empty");
var existSignup = document.getElementById("exist");
var successSignup = document.getElementById("success");
var alertSignup = document.querySelector(".alert");
//end

var signUpArr = [];

if(localStorage.getItem("signUpStorage")){
    signUpArr = JSON.parse(localStorage.getItem("signUpStorage"))
}

if (document.getElementById('signupbtn')) {
    btnSign.addEventListener("click", signUp);
}
function signUp(){
    signupconditions();
    var regexEmail = /^[A-Za-z0-9]{3,8}@[a-z]{2,8}\.com$/
    var regexpass = /^[A-Za-z0-9!@#$%^&*]{8,16}$/
    if (signupconditions()){
        signupconditions()
    }
    else if (regexEmail.test(input2.value) && regexpass.test(input3.value)){

        var signupObj = {
            Name: input1.value,
            Email: input2.value,
            Password: input3.value
        }

        signUpArr.push(signupObj);
        console.log(signUpArr)
        localStorage.setItem("signUpStorage", JSON.stringify(signUpArr));
        clear();
    } else if (input1.value == "" || input2.value == "" || input3.value == "") {
        emptySignup.classList.replace("d-none", "d-block");
        alertSignup.classList.replace("d-block", "d-none");
    } else if (regexEmail.test(input2.value) == false || regexpass.test(input3.value) == false){
        alertSignup.classList.replace("d-none", "d-block");
        emptySignup.classList.replace("d-block", "d-none");
    }
}

function clear(){
    input1.value = "";
    input2.value = "";
    input3.value = "";
}

if (btnLogin) {
    btnLogin.addEventListener("click", login); 
}

function login(){
       var email = inputLE.value;
       var Password = inputLP.value;
    for(var i = 0; i < signUpArr.length;i++){
        if (signUpArr[i].Email == email && signUpArr[i].Password == Password){
            location.assign("file:///F:/js%20assiments/smart%20login%20system/third.html");
        }else if(email == "" && Password == ""){
            emptyLogin.classList.replace("d-none", "d-block");
            incorrectLogin.classList.replace("d-block", "d-none");
        } else if (signUpArr[i].Email != email){
            incorrectLogin.classList.replace("d-none", "d-block");
            emptyLogin.classList.replace("d-block", "d-none");
        }

    }
}

 
 function signupconditions(){
     var EmailSign = input2.value; 
     var passeordSign = input3.value; 
    for(var i = 0; i < signUpArr.length; i++){
        if (signUpArr[i].Name == EmailSign || signUpArr[i].Password == passeordSign){
        existSignup.classList.replace("d-none", "d-block");
        alertSignup.classList.replace("d-block", "d-none");
        emptySignup.classList.replace("d-block", "d-none");
        return true;
        }
    }
 }



