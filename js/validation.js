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
 * Check if name field is not empty.
 * 
 * @returns {boolean} Returns true if the name field is not empty; false otherwise.
 */
const nameValidator = () => {
    const regexName = /\w+/;
    if (regexName.test(name.value)) {
        name.style.borderColor = '';
        return true;
    } else {
        name.style.borderColor = 'red';
        return false;
    }
};

/**
 * Check if email is valid.
 * 
 * @returns {boolean} Returns true if the email has a correct format; false otherwise.
 */
const emailValidator = () => {
    const regexEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;

    if (regexEmail.test(email.value)) {
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
 * Check that at least an activity has been selected.
 * 
 * @returns {boolean} Returns true if at least an activity has been selected.
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
 * Validate a credit card number, cvv, and zip code.
 * 
 * @returns {boolean} Returns true if all credit card details are correct; otherwise return false and display error message.
 */
const creditCardValidator = () => {
    if (paymentMethods[1].selected === true) {
        const ccNumbers = document.getElementById('cc-num');
        const regexCCNumbers = /^\d{13,16}$/;
        const zip = document.getElementById('zip');
        const regexZip = /^\d{5}$/;
        const cvv = document.getElementById('cvv');
        const regexCvv = /^\d{3}$/;
        let isInvalid = false;


        if (regexCvv.test(cvv.value)) {
            cvv.style.borderColor = '';
        } else {
            cvv.style.borderColor = 'red';
            ccMessage.textContent = 'Please enter a 3-digit number';
            isInvalid = true;
        }

        if (regexZip.test(zip.value)) {
            zip.style.borderColor = '';
        } else {
            zip.style.borderColor = 'red';
            ccMessage.textContent = 'Please enter a 5-digit ZIP Code';
            isInvalid = true;
        }

        if (regexCCNumbers.test(ccNumbers.value)) {
            ccNumbers.style.borderColor = '';
        } else {
            // Conditional error message
            if (ccNumbers.value.length === 0) {
                ccMessage.textContent = 'Please enter a credit card number';
            } else {
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

// Submit form if the name, email, activity, and credit card return true;
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