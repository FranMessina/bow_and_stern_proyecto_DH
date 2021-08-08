window.addEventListener("load", function(){

const firstName= document.querySelector("#firstName")
const lastName= document.querySelector("#lastName")
const password= document.querySelector("#password")
const confirmPassword= document.querySelector("#confirmPassword")
const email= document.querySelector("#email")
const check= document.querySelector("#check")

const form= document.querySelector("form")


//Mensajes De error

const errorOutput= document.querySelector("#errors")
errorOutput.style.display="none"
let errorName= ""
let errorSurname= ""
let errorPassword=""
let errorEmail=""
let errorConfirm=""
let errorConditions = ""

console.log(errorOutput)

//no me funciona el reset errors
function resetErrors() {
     errorName= ""
     errorSurname= ""
     errorPassword=""
     errorEmail=""
     errorConfirm=""
     errorConditions=""
    
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formValidation (e){
    let hasErrors= false
    
    resetErrors()



    if (firstName.value.length<3 || firstName.value.length>40){
    hasErrors=true
    errorName="Input valid name."
    }

     if (lastName.value.length<3 || lastName.value.length>40){
        hasErrors=true
        errorSurname="Input valid surname."
        }

     if (password.value.length <8) {
        hasErrors=true
        errorPassword= "Minimun length for password is 8."
    }
     if(confirmPassword.value != password.value) {
        hasErrors=true
        errorConfirm= "Passwords must match."
    }

     if(!validateEmail(email.value)){
        hasErrors=true
        errorEmail= "Enter a valid email."
    }
    
    if (!check.checked) {
        hasErrors= true
        errorConditions= "Accept terms and conditions"
    }
       
     if (hasErrors) {
        errorOutput.innerHTML = "Please solve the following issues: </br>" +errorName+" " +errorSurname+" " +errorEmail+" "+errorPassword+" "+errorConfirm+ " "+ errorConditions;
            errorOutput.style.display="block"
          errorOutput.style.color="red"
       e.preventDefault()
        }
      


}


form.addEventListener("submit", formValidation)











})

