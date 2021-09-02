
    const form = document.querySelector('.create-form')
    
    // Los inputs
    const inputName = form.querySelector('input[name=name]')
    const inputYear = form.querySelector('input[name=year]')
    const inputMeasure = form.querySelector('input[name=measures]')
    const inputVesselType = form.querySelector('select[name=vesselType]')
    
const inputDesc = form.querySelector('#description')
const inputShortDesc = form.querySelector('#shortDescription')
const inputImages = form.querySelector('input[name=image]')
    // Error msgs
    const errorDisplay = form.querySelector('.error-display')

    const currentTime = new Date()
    inputYear.setAttribute('max',currentTime.getFullYear())
    let errorName = ''
    let errorYear = ''
    let errorMeasures = ''

    
    let errorsMsgArray = [];

errorDisplay.style.color = 'red'
errorDisplay.style.fontSize = "13px"

const displayErrors = () => {
    errorDisplay.innerHTML = "Please solve the following issues: </br>";
    errorsMsgArray.forEach(msg => {
       errorDisplay.innerHTML += `<p>${msg}</p>`
     })
 }

 const resetErrors = () => {
    errorDisplay.innerHTML = ''
}


const validate = (e) => {
    let hasErrors = false;

    resetErrors()

    errorsMsgArray = []

    if (!inputName.value) {
        hasErrors = true
        errorsMsgArray.push('Input a longer name')
    }

    if (!inputYear.value) {
        hasErrors = true
        errorsMsgArray.push('Input a valid year')
    }

    if (!inputMeasure.value) {
        hasErrors = true
        errorsMsgArray.push('Input a valid Measures')
    }

    if (!inputDesc.value) {
        hasErrors = true
        errorsMsgArray.push('Input a description')
    }

    if (!inputShortDesc.value) {
        hasErrors = true
        errorsMsgArray.push('Input a short description')
    }


    if (!inputVesselType.value) {
        hasErrors = true
        errorsMsgArray.push('Select you vessel category')
    }


    if(hasErrors) {
        displayErrors()
        window.scrollTo(0, 0);
        e.preventDefault()
    }

}


   /* function formValidation (e){
        let hasErrors = false
        resetErrors()
    
        if (inputName.value.length < 3) {
            hasErrors = true
            errorName = "Name incorrect. Please, try again."
        }
        
        if (inputYear.value.length < 3) {
            hasErrors = true
            errorYear = "Year incorrect. Please, try again."
        }

        if (inputMeasure.value.length < 3) {
            hasErrors = true
            errorMeasures = "Feet incorrect. Please, try again."
        }
        
        if (hasErrors) {
          errorMsg.innerHTML = errorName + ' ' + errorYear + '' + inputMeasure
          errorMsg.style.display='block'
          errorMsg.style.color='red'
          errorMsg.style.fontSize= "12px"
          e.preventDefault()
        } 
    
      }*/
        
    form.addEventListener("submit", validate)
        