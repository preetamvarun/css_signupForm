const fId = document.getElementById('FirstName');
const lId = document.getElementById('LastName');
const emailInput = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const signUp = document.querySelector('form button');

let errorMsg,currentField,passMsg;

function showError(fieldName){
    currentField = fieldName;
    currentField.style.border = '2px solid red';
    errorMsg = currentField.parentElement.lastElementChild;
    currentField.name === 'FirstName' || currentField.name === 'LastName' ? 
    errorMsg.textContent = `${currentField.name.toLowerCase()} should be atleast 5 characters` : 
    currentField.name === 'email' ? errorMsg.textContent = 'not a valid email' : currentField.name === 'password' ?
    errorMsg.textContent = 'password should be atleast 6 characters' : errorMsg.textContent = 'passwords do not match';
    errorMsg.style.color = 'red';
}

function showPass(fieldName){
    passMsg = fieldName.parentElement.lastElementChild;
    fieldName.style.border = '2px solid green';
    passMsg.textContent = '';    
}

function checkNames(){
    fId.value.length >= 5 ? showPass(fId) : showError(fId);
    lId.value.length >=5 ? showPass(lId) : showError(lId);
}

function checkEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (re.test(String(emailInput.value).toLowerCase())) ? showPass(emailInput) : showError(emailInput);
}

function checkConfirmPassword(password){
    password === confirmPasswordField.value ? showPass(confirmPasswordField) : showError(confirmPasswordField);
}

function checkPassword(){
    let password = passwordField.value;
    password.length >= 6 ? showPass(passwordField) : showError(passwordField);
    checkConfirmPassword(password);
}

function checkRequirements(e){
    checkNames();
    checkEmail();
    checkPassword();
    e.preventDefault();
}

signUp.addEventListener('click',checkRequirements);