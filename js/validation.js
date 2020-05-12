/**********************************************
Developed by: James Estrada 

Validate data entered into the form.
***********************************************/

const form = document.querySelector('form');
const email = document.querySelector('#mail');
const activity = document.querySelector('.activities');

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

const activitiesValidator = () => {
    const activitiesSelected = [];
    const legend = activities.querySelector('legend');
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            activitiesSelected.push(checkbox);
        }
    }
    if (activitiesSelected.length > 0) {
        legend.style.borderTopColor = '';
        legend.style.color = '';
        return true;
    } else {
        legend.style.borderTopColor = 'red';
        legend.style.color = 'red';
        return false;
    }
};

const creditCardValidator = () => {
    if (paymentMethods[1].selected === true) {
        // const ccInputFields = creditCard.querySelectorAll('input');
        const ccNumbers = document.getElementById('cc-num');
        const zip = document.getElementById('zip');
        const cvv = document.getElementById('cvv');
        let isInvalid = false;
        
        if (typeof(ccNumbers) === 'number' && ccNumbers.value.length > 12 && ccNumbers.value.length < 17) {
            ccNumbers.style.borderColor = '';
        } else {
            ccNumbers.style.borderColor = 'red';
            isInvalid = true;
        }
        if (!isNaN(zip.value) && zip.value.length === 5) {
            zip.style.borderColor = '';
        } else {
            zip.style.borderColor = 'red';
            isInvalid = true;
        }
        if (!isNaN(cvv.value) && cvv.value.length === 3) {
            cvv.style.borderColor = '';
        } else {
            cvv.style.borderColor = 'red';
            isInvalid = true;
        }

        if (isInvalid) {
            return false;
        }
        return true;
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
    if (!activitiesValidator()) {
        e.preventDefault();
    }
    if (!creditCardValidator()) {
        e.preventDefault();
    }
});