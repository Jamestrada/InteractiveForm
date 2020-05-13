/**********************************************
Interactive Form
Developed by: James Estrada 

Interactive web form.
***********************************************/

const name = document.getElementById('name');
name.focus();

// Job Role section

const jobRole = document.getElementById('title');
// Select and hide initially the other-job-role text field.
const otherJobRole = document.getElementById('other-job-role'); 
otherJobRole.style.display = 'none';

// Enable the 'other-job-role' text field only if the option the user selected was 'other'.
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
    }
});

// T-Shirt info section

const selectTShirtTheme = document.createElement('option');
selectTShirtTheme.value = 'select theme';
selectTShirtTheme.textContent = 'Please select a T-shirt theme';
const colorDiv = document.querySelector('#colors-js-puns');
const colorMenu = document.querySelector('#color');
const firstColorOption = document.querySelector('option[value="cornflowerblue"]');
colorMenu.insertBefore(selectTShirtTheme, firstColorOption);
const tShirtColors = document.querySelectorAll('#color option');
tShirtColors[0].selected = true;

const hideColors = () => {
    colorDiv.hidden = true;
    for (let i = 0; i < tShirtColors.length; i++) {
        tShirtColors[i].hidden = true;
    }
    tShirtColors[0].selected = true;
};
hideColors();

const showColors = (colors) => {
    hideColors();
    colorDiv.hidden = false;
    for (let i = 0; i < colors.length; i++) {
        colors[i].hidden = false;
    }
    tShirtColors[0].hidden = true;
    colors[0].selected = true;
};

const tShirtDesign = document.querySelector('#design');
tShirtDesign.addEventListener('change', (e) => {
    if (e.target.value === 'js puns') {
        showColors([tShirtColors[1], tShirtColors[2], tShirtColors[3]]);
    } else if (e.target.value === 'heart js') {
        showColors([tShirtColors[4], tShirtColors[5], tShirtColors[6]]);
    } else {
        hideColors();
    }
});

// Register for Activities section

const activities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');
const total = document.createElement('h3');
let cost = 0;
activities.appendChild(total);
total.textContent = `Total price: $${cost}`;

activities.addEventListener('change', (e) => {
    const clicked = e.target;
    for (const checkbox of checkboxes) {
        if (checkbox.dataset['dayAndTime'] === clicked.dataset['dayAndTime'] && checkbox !== clicked) {
            if (clicked.checked) {
                checkbox.disabled = true;
            } else {
                checkbox.disabled = false;
            }
        }
    }
    if (clicked.checked) {
        cost += parseInt(clicked.dataset['cost']);
    } else {
        cost -= parseInt(clicked.dataset['cost']);
    }
    total.textContent = `Total price: $${cost}`;
});

// Payment info section
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentMethods = payment.querySelectorAll('option');
paymentMethods[0].disabled = true;
paymentMethods[1].selected = true;
// Since credit card is selected by default, hide the other payment options.
paypal.hidden = true; 
bitcoin.hidden = true; 

payment.addEventListener('change', (e) => {
    if (e.target.value === 'credit card') {
        paypal.hidden = true;
        bitcoin.hidden = true;
        creditCard.hidden = false;
    } else if (e.target.value === 'paypal') {
        creditCard.hidden = true;
        bitcoin.hidden = true;
        paypal.hidden = false;
    } else if (e.target.value === 'bitcoin') {
        creditCard.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
    }
});