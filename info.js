const fname = document.getElementById('fName')
const lName = document.getElementById('lName')
const age = document.getElementById('age')
const username = document.getElementById('username')
var password = document.getElementById('password')
var password2 = document.getElementById('password2')
const form = document.getElementById('signup')
const errors = document.getElementById('error')
const pass = /^([A-Za-z])+(?=.*[0-9])(\w){6}/;
const names = /^([A-Z])([A-Za-z])*/;
var passAlpha = false;
var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


form.addEventListener('submit', e => {
    let messages = []
 
  if(fname.value === ''|| fname.value === null || !fname.value.match(names)){
    messages.push('First name is required to start with uppercase letter and only contain letters');
  }
   
  if(lName.value === ''|| lName.value === null && !lName.value.match(names)){
    messages.push('Last name is required to start with uppercase letter and only contain letters');
  }
   

 
 
    if (age.value < 18 || age.value > 60){
        messages.push('age must be between 18-60!');
    } 

    if (username.value === '' || username.value === null || username.value.length <6 || username.value.match(pass)) {
        messages.push('Username is required to be 6+ charaters');
    }

    if (password.value.length < 6 || password.value === '' || password.value === null && !password.value.match(pass)){
        messages.push('Password must be 6+ charaters, start with a letter, contain on upper case and one lower case letter and one number');
    }
    
    if(password.value != password2.value){
        messages.push('Passwords Do not Match');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errors.innerText = messages.join('\n\n');
    }


});

/*
function showErrorMessage(msg) {
    var errMessage = document.querySelector('#error-msg');
    // Remove the hidden class so the error message shows.
    errMessage.classList.remove('hidden');
    // Set the error message text
    errMessage.innerHTML = msg;
}

function hideErrorMessage(msg) {
    var errMessage = document.querySelector('#error-msg');
    // Add the hidden class so the error message goes away.
    errMessage.classList.add('hidden');
}
*/
