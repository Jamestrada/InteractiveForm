/**********************************************
Developed by: James Estrada 

Validate data entered into the form.
***********************************************/

const form = document.querySelector('form');
const email = document.querySelector('#mail');
const activity = document.querySelector('.activities');

// Credit card number error message.
const ccDiv = document.querySelector('#credit-card');
const ccNumDiv = document.querySelector('.col-6');
const ccMessage = document.createElement('p');
ccDiv.insertBefore(ccMessage, ccNumDiv);
ccMessage.hidden = true;

// Email error message.
const emailLabel = document.querySelector('#mail').previousElementSibling;
const emailMessage = document.createElement('span');
emailLabel.appendChild(emailMessage);
emailMessage.hidden = false;


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
        emailMessage.hidden = true;
        return true;
    } else {
        email.style.borderColor = 'red';
        emailMessage.textContent = ' Invalid email';
        emailMessage.style.color = 'red';
        emailMessage.hidden = false;
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
        const ccNumbers = document.getElementById('cc-num');
        const zip = document.getElementById('zip');
        const cvv = document.getElementById('cvv');
        let isInvalid = false;
        
        if (ccNumbers.value.length > 12 && ccNumbers.value.length < 17) { // typeof(ccNumbers) === 'number' && 
            ccNumbers.style.borderColor = '';
            ccMessage.hidden = true;
        } else {
            // Conditional error message
            if (ccNumbers.value.length === 0) {
                ccMessage.textContent = 'Please enter a credit card number';
            } else if (ccNumbers.value.length < 13 || ccNumbers.value.length > 16) {
                ccMessage.textContent = 'Please enter a number that is between 13 and 16 digits long';
            }
            ccMessage.style.color = 'red';
            ccMessage.hidden = false;
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
    return true;
};

// Real-time error messages.
name.addEventListener('blur', nameValidator);
email.addEventListener('keyup', emailValidator);
activity.addEventListener('change', activitiesValidator);

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