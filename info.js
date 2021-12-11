const fname = document.getElementById('fName');
const lName = document.getElementById('lName');
const age = document.getElementById('age');
const username = document.getElementById('username');
const email = document.getElementById('email');
const grad = document.getElementById('Graduated');
const nongrad = document.getElementById('DidnotGrad');
const enrolled = document.getElementById('CurrentEnrolled');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
const form = document.getElementById('signup');
const errors = document.getElementById('error');
const user = /^([A-Za-z])+([A-Za-z0-9]){6}/;
const pass = /^(?=.*[A-Z][a-z])+([A-Za-z0-9])(?=.*[A-Z])(?=.*[0-9]){6}/;
const names = /^([A-Z])([A-Za-z])*/;
const emailmatch = /^(.+)@(.+)$/;

form.addEventListener('submit', e => {
  let messages = []

  if (fname.value === '' && lName.value === '' && age.value === '' && email.value === '' && username.value === '' && password.value === '' && password2.value === '') {
    alert("All Fields are Required to have input");
    e.preventDefault();

  } else {

    if (fname.value === '' || fname.value === null || !fname.value.match(names)) {
      messages.push('First name is required to start with uppercase letter and only contain letters');
    } else if (lName.value === '' || lName.value === null || !lName.value.match(names)) {
      messages.push('Last name is required to start with uppercase letter and only contain letters');
    }

    if (age.value < 18 || age.value > 60) {
      messages.push('age must be between 18-60!');
    }
    if (!email.value.match(emailmatch)) {
      messages.push('incorrect email Format')
    }
    if (!grad.checked && !nongrad.checked && !enrolled.checked) {
      messages.push('Please select Education level')
    }

    if (username.value === '' || username.value === null || username.value.length < 6) {
      messages.push('Username is required to be 6+ charaters');

    } else if (!username.value.match(user)) {
      console.log(username.value.match(user));
      messages.push('Username must start with a letter');

    }
    var flag = false;
    var i = 0;
    if (password.value.length < 6 || password.value === '' || password.value === null) {
      messages.push('Password must be 6+ charaters');

    } else if (!password.value.match(pass)) {
      console.log(password.value.match(pass));
      messages.push('Password must start with a letter and have one number and one Uppercase');

    }
    else if (password.value != password2.value) {
      messages.push('Passwords Do not Match');
    }



    if (messages.length > 0) {
      e.preventDefault();
      errors.innerText = messages.join('\n\n');
    }
  }

});
