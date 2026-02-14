// Get the form element
const form = document.getElementById('registrationForm');

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // 1. Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('nameError', 'Please enter your name.');
        isValid = false;
    }

    // 2. Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'Please enter your email address.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // 3. Validate Gender (at least one radio selected)
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        showError('genderError', 'Please select your gender.');
        isValid = false;
    }

    // 4. Validate Subjects (at least one checkbox checked)
    const subjectChecked = document.querySelectorAll('input[name="subject"]:checked');
    if (subjectChecked.length === 0) {
        showError('subjectError', 'Please select at least one subject.');
        isValid = false;
    }

    // 5. Validate Declaration Checkbox
    const declaration = document.getElementById('declaration');
    if (!declaration.checked) {
        showError('declarationError', 'You must accept the declaration to proceed.');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Registration submitted successfully!');
        // Here you can send data to server or reset form
        form.reset();
    }
});

// Function to show error message
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => {
        el.textContent = '';
    });
}
