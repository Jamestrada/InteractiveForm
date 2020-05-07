/**********************************************
Interactive Form
Developed by: James Estrada 

Interactive web form.
***********************************************/

const firstFocus = document.getElementById('name');
firstFocus.focus();

const jobRole = document.getElementById('title');
//select and hide initially the other-job-role text field.
const otherJobRole = document.getElementById('other-job-role'); 
otherJobRole.style.display = 'none';

// enable the 'other-job-role' text field only if the option the user selected was 'other'.
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
    }
});

const selectTShirtTheme = document.createElement('option');
selectTShirtTheme.value = 'select theme';
selectTShirtTheme.textContent = 'Please select a T-shirt theme';
const colorMenu = document.querySelector('#color');
const firstColorOption = document.querySelector('option[value="cornflowerblue"]');
colorMenu.insertBefore(selectTShirtTheme, firstColorOption);
const tShirtColors = document.querySelectorAll('#color option');
tShirtColors[0].selected = true;

const hideColors = () => {
    for (let i = 1; i < tShirtColors.length; i++) {
        tShirtColors[i].hidden = true;
    }
};
hideColors();

const showColors = () => {
    for (let i = 1; i < tShirtColors.length; i++) {
        tShirtColors[i].hidden = false;
    }
};

const tShirtDesign = document.querySelector('#design');
tShirtDesign.addEventListener('change', (e) => {
    if (e.target.value !== 'Select Theme') {
        showColors();
    } else {
        hideColors();
    }
});


