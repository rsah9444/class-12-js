const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const submitButton = document.getElementById('submit-button');

const nameRegex = /^[a-zA-Z ]{2,30}$/; // letters and spaces only, 2-30 characters
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // valid email format
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // at least one digit, one lowercase and one uppercase letter, 8 or more characters

function validateName() {
  if(nameInput.value=""){
    nameInput.classList.add('invalid');
    nameError.textContent = 'Please enter a valid name (letters and spaces only, 2-30 characters)';
  }
 else if (!nameRegex.test(nameInput.value)) {
    nameInput.classList.add('invalid');
    nameError.textContent = 'Please enter a valid name (letters and spaces only, 2-30 characters)';
    return false;
  } else {
    nameInput.classList.remove('invalid');
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailError.textContent = 'Please enter a valid email address';
    return false;
  } else {
    emailInput.classList.remove('invalid');
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add('invalid');
    passwordError.textContent = 'Please enter a valid password (at least one digit, one lowercase and one uppercase letter, 8 or more characters)';
    return false;
  } else {
    passwordInput.classList.remove('invalid');
    passwordError.textContent = '';
    return true;
  }
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  return isNameValid && isEmailValid && isPasswordValid;
}

form.addEventListener('submit', function(event) {
event.preventDefault(); // prevent form from submitting

const isFormValid = validateForm();

if (isFormValid) {
form.submit(); // submit form
}
});

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
