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

/**
 * 
 * 
 * @returns {boolean} 
 */
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

/**
 * 
 * 
 * @returns {boolean} 
 */
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

/**
 * 
 * 
 * @returns {boolean} 
 */
const activitiesValidator = () => {
    const legend = activities.querySelector('legend');
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            legend.style.borderTopColor = '';
            legend.style.color = '';
            return true;
        }
    }
    legend.style.borderTopColor = 'red';
    legend.style.color = 'red';
    return false;
};

/**
 * 
 * 
 * @returns {boolean} 
 */
const creditCardValidator = () => {
    if (paymentMethods[1].selected === true) {
        const ccNumbers = document.getElementById('cc-num');
        const zip = document.getElementById('zip');
        const cvv = document.getElementById('cvv');
        let isInvalid = false;


        if (!isNaN(cvv.value) && cvv.value.length === 3) {
            cvv.style.borderColor = '';
        } else {
            cvv.style.borderColor = 'red';
            ccMessage.textContent = 'Please enter a 3-digit number';
            isInvalid = true;
        }

        if (!isNaN(zip.value) && zip.value.length === 5) {
            zip.style.borderColor = '';
        } else {
            zip.style.borderColor = 'red';
            ccMessage.textContent = 'Please enter a 5-digit ZIP Code';
            isInvalid = true;
        }

        if (ccNumbers.value.length > 12 && ccNumbers.value.length < 17) { // typeof(ccNumbers) === 'number' && 
            ccNumbers.style.borderColor = '';
        } else {
            // Conditional error message
            if (ccNumbers.value.length === 0) {
                ccMessage.textContent = 'Please enter a credit card number';
            } else if (ccNumbers.value.length < 13 || ccNumbers.value.length > 16) {
                ccMessage.textContent = 'Please enter a number that is between 13 and 16 digits long';
            }
            ccNumbers.style.borderColor = 'red';
            isInvalid = true;
        }

        if (isInvalid) {
            ccMessage.style.color = 'red';
            ccMessage.hidden = false;
            return false;
        }
        ccMessage.hidden = true;
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