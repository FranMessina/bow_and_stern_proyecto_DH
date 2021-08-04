window.addEventListener("load", function(){

const firstName= document.querySelector("#firstName")
const lastName= document.querySelector("#lastName")
const password= document.querySelector("#password")
const confirmPassword= document.querySelector("#confirmPassword")
const email= document.querySelector("#email")
const check= document.querySelector("#check")

const form= document.querySelector("form")


//Mensajes De error

const erroOutput= document.querySelector("#errors")
const errorName= ""
const errorSurname= ""
const errorPassword=""
const errorEmail=""
const errorConfirm=""




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formValidation (e){

    let hasErrors= false

    if (firstName.value.length<3 || firstName.value.length>40){
    hasErrors=true
    errorName="Please, input valid name"
    }

    if (lastName.value.length<3 || lastName.value.length>40){
        hasErrors=true
        errorSurname="Please, input valid surname"
        }

    if (password.value.length <8) {
        hasErrors=true
        errorPassword= "minimun length for password is 8."
    }
    if(confirmPassword.value != password.value) {
        hasErrors=true
        errorConfirm= "passwords must match"
    }

    if(!validateEmail(email.value)){
        hasErrors=true
        errorEmail= "please enter a valid email"
    }

    if (hasErrors) {
            e.preventDefault()
        }
        erroOutput.innerHTML = errorName +errorSurname +errorPassword+errorEmail+errorConfirm
}


form.addEventListener("submit", formValidation)











})

