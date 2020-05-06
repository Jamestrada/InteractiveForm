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