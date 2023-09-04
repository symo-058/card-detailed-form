const inputNumber = document.querySelector('.number');
const inputName = document.querySelector('.name');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');
const inputCvc = document.querySelector('.cvc');

const outputNumber = document.querySelector('.card-number');
const outputName = document.querySelector('.card-name');
const outputExpDate = document.querySelector('.exp-date');
const outputMonths = document.querySelector('.month-out');
const outputYears = document.querySelector('.year-out');
const outputCvc = document.querySelector('.cvc-number-hidden');

const inputs = document.querySelectorAll('input');

const card = document.querySelector('.form-card');
const success = document.querySelector('.success');

const confirmButton = document.querySelector('.continue');
const continueButton = document.querySelector('.btn1');

const errorNumber = document.querySelector('.error-number');
const errorDate = document.querySelector('.error-date');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const errorCvc = document.querySelector('.error-cvc');

const regEx = /^\d{4} \d{4} \d{4} \d{4}$/;


//this code prevent the page from reloading after clicking the confirm button
confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    // card.style.display = 'none';
    // success.style.display = 'block';
});


continueButton.addEventListener('click', () => {
    // reloads the page when the button is clicked
    location.reload();
    card.style.display = 'block';
    success.style.display = 'none';
});


//to output events in real time when keying in
inputNumber.addEventListener('keyup', function(){
    outputNumber.textContent = inputNumber.value;
});

inputName.addEventListener('keyup', function(){
    outputName.textContent =inputName.value.toUpperCase();
});

inputMonth.addEventListener('keyup', function(){
    outputMonths.textContent = inputMonth.value;
});

inputYear.addEventListener('keyup', function(){
    outputYears.textContent = inputYear.value;
});

inputCvc.addEventListener('keyup', function(){
    outputCvc.textContent = inputCvc.value;
     
});


let isValid = false;

inputMonth.addEventListener('input', function() {

    this.value = this.value.replace(/[^0-9]/g,"");
    if(+inputMonth.value > 12){
        errorMonth.textContent = 'Must be a valid month';
    } else {
        isValid = true;
        errorMonth.textContent = '';
        
    }
});

inputYear.addEventListener('input', function() {

    this.value = this.value.replace(/[^0-9]/g,"");
    if(+inputYear.value < 23){
        errorYear.textContent = 'Year must be in the future';
    } else {
        isValid = true;
        errorYear.textContent = '';
        
    }
});


confirmButton.addEventListener('click', function(){
    if (isValid == true){
        // console.log('it is working');
        card.style.display = 'none';
        success.style.display = 'block';
    }
    else{
        errorMonth.textContent = "Can't be blank";
        errorCvc.textContent = "Can't be blank";
    }
});

//prevent the user from typing letters
inputCvc.addEventListener('input', function(){
    this.value = this.value.replace(/[^0-9]/g,"");
});

inputNumber.addEventListener('input', function(){
    this.value = this.value.replace(/[^0-9]/g,"");
});


