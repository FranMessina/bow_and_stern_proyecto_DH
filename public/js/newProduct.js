const form = document.querySelector('.create-form')

const inputName = form.querySelector('#name')
const inputYear = form.querySelector('#year')
const inputMeasures = form.querySelector('#measures')
const inputDesc = form.querySelector('#description')
const inputShortDesc = form.querySelector('#shortDescription')
const inputImages = form.querySelector('#imgs')
const inputVessel = form.querySelector('#vessel')

let inputArray = [inputName, inputYear, inputMeasures, inputDesc, inputShortDesc, inputImages, inputVessel]

let errorsMsgArray = [];

const errorDisplay = form.querySelector('.error-display')

errorDisplay.style.color = 'red'

const displayErrors = () => {
    errorsMsgArray.forEach(msg => {
       errorDisplay.innerHTML += `<h3>${msg}</h3>`
     })
 }

 const resetErrors = () => {
     errorDisplay.innerHTML = ''
 }

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const validate = (e) => {
    let hasErrors = false;

    resetErrors()

    errorsMsgArray = []

    if (inputName.value.length < 3) {
        hasErrors = true
        errorsMsgArray.push('Please input a longer name')
    }

    if (!isNumeric(inputYear.value) || !inputYear) {
        hasErrors = true
        errorsMsgArray.push('Please input a valid year')
    }

    if (!isNumeric(inputMeasures.value)) {
        hasErrors = true
        errorsMsgArray.push('Please input a valid Measures')
    }

    if (!inputDesc.value) {
        hasErrors = true
        errorsMsgArray.push('Please input a description')
    }

    if (!inputShortDesc.value) {
        hasErrors = true
        errorsMsgArray.push('Please input a short description')
    }

    if(!inputImages.value) {
        hasErrors = true
        errorsMsgArray.push('Please upload an image')
    }

    if (!inputVessel.value) {
        hasErrors = true
        errorsMsgArray.push('Please select you vessel category')
    }


    if(hasErrors) {
        displayErrors()
        e.preventDefault()
    }

}

form.addEventListener('submit', validate)
