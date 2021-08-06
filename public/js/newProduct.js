const form = document.querySelector('.create-form')

const inputName = form.querySelector('#name')
const inputYear = form.querySelector('#year')
const inputMeasures = form.querySelector('#measures')
const inputDesc = form.querySelector('#description')
const inputShortDesc = form.querySelector('#shortDescription')
const inputImages = form.querySelector('#imgs')

let inputArray = [inputName, inputYear, inputMeasures, inputDesc, inputShortDesc, inputImages]

let errorsMsgArray = [];

const errorDisplay = form.querySelector('.error-display')

// const resetErrors = () => {
//     errorsMsgArray.forEach(msg => {
//         errorDisplay.innerHTML = `<p>${msg}</p>`
//     })
// }

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const validate = (e) => {
    let hasErrors = false;

    if (inputName.value.length < 3) {
        hasErrors = true
        errorsMsgArray.push('Please input a longer name')

    }

    if (!isNumeric(inputYear.value)) {
        hasErrors = true
        errorsMsgArray.push('Please input a valid year')

    }

    if (!isNumeric(inputMeasures.value)) {
        hasErrors = true
        errorsMsgArray.push('Please input a valid Measures')

    }



    if(hasErrors) {
        e.preventDefault()
    }

}

form.addEventListener('submit', (e) => {
    
    e.preventDefault()
})

inputArray.forEach(input => {
    input.addEventListener('focus', validate)
})