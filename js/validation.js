/**********************************************
Developed by: James Estrada 

Validate data entered into the form.
***********************************************/

const form = document.querySelector('form');
const email = document.querySelector('#mail');

const nameValidator = () => {
    const nameValue = name.value;
    if (nameValue) {
        name.style.borderColor = '';
        return true;
    } else {
        name.style.borderColor = 'red';
        return false;
    }
};

const emailValidator = () => {
    const emailValue = email.value;
    const atSymbol = emailValue.indexOf('@');
    const dot = emailValue.lastIndexOf('.');

    if (atSymbol > 1 && dot > atSymbol + 1) {
        email.style.borderColor = '';
        return true;
    } else {
        email.style.borderColor = 'red';
        return false;
    }
};

name.addEventListener('blur', nameValidator);
email.addEventListener('blur', emailValidator);

form.addEventListener('submit', (e) => {
    if (!nameValidator()) {
        e.preventDefault();
    }
    if (!emailValidator()) {
        e.preventDefault();
    }
});