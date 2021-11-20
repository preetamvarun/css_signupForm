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

function checkConfirmPassword(password){
    console.log('enter into function');
    let msg = confirmPasswordField.parentElement.lastElementChild;
    console.log(`original password ${password}`);
    console.log(`confirmed password ${confirmPasswordField.value}`);
    if(password === confirmPasswordField.value){
        msg.textContent = '';
        confirmPasswordField.style.border = '2px solid green';
    } else{
        msg.textContent = 'passwords do not match';
        confirmPasswordField.style.border = '2px solid red';
    }
}


function checkPassword(){
    let password = passwordField.value;
    let msg = passwordField.parentElement.lastElementChild;
    if(password.length >= 6){
        passwordField.style.border = '2px solid green';
        msg.textContent = '';
    } else{
        msg.textContent = 'Password should be atleast 6 characters';
        passwordField.style.border = '2px solid red';
    }
    checkConfirmPassword(password);
}

function checkRequirements(e){
    checkNames();
    checkEmail();
    checkPassword();
    e.preventDefault();
}


signUp.addEventListener('click',checkRequirements);