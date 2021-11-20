const fId = document.getElementById('FirstName');
const lId = document.getElementById('LastName');
const emailInput = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const signUp = document.querySelector('form button');


function checkNames(){
    if(fId.value.length >= 5){
        let msg = fId.parentElement.lastElementChild;
        fId.style.border = '2px solid green';
        msg.textContent = '';
    }
    if(fId.value.length < 5){
        fId.style.border = '2px solid red';
        let msg = fId.parentElement.lastElementChild;
        msg.textContent = 'First name should be atleast 5 characters';
        msg.style.color = 'red';
    }
    if(lId.value.length >= 5){
        lId.style.border = '2px solid green';
        let msg = lId.parentElement.lastElementChild;
        msg.textContent = '';
    } 
    if(lId.value.length < 5){
        lId.style.border = '2px solid red';
        let msg = lId.parentElement.lastElementChild;
        msg.textContent = 'Last name should be atleast 5 characters';
        msg.style.color = 'red';
    }
}

function checkEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(emailInput.value).toLowerCase())){
        emailInput.style.border = '2px solid green';
    } else{
        emailInput.style.border = '2px solid red';
        emailInput.parentElement.lastElementChild.textContent = 'email is not valid';
        emailInput.parentElement.lastElementChild.style.color = 'red';
    }
}

function checkRequirements(e){
    checkNames();
    checkEmail();
    
    e.preventDefault();
}


signUp.addEventListener('click',checkRequirements);