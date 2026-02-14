const form = document.getElementById('hotelForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // stop form from submitting

    clearErrors(); // reset all error messages

    let valid = true;

    // 1. Guest Name
    const name = document.getElementById('guestName').value.trim();
    if (name === '') {
        showError('nameError', 'Please enter guest name.');
        valid = false;
    }

    // 2. Contact Number
    const contact = document.getElementById('contact').value.trim();
    const phonePattern = /^[0-9]{10,15}$/; // basic phone validation
    if (contact === '') {
        showError('contactError', 'Please enter contact number.');
        valid = false;
    } else if (!phonePattern.test(contact)) {
        showError('contactError', 'Enter a valid contact number (10–15 digits).');
        valid = false;
    }

    // 3. Room Type (radio)
    const roomSelected = document.querySelector('input[name="roomType"]:checked');
    if (!roomSelected) {
        showError('roomError', 'Please select a room type.');
        valid = false;
    }

    // 4. Additional Services (checkboxes)
    const servicesChecked = document.querySelectorAll('input[name="services"]:checked');
    if (servicesChecked.length === 0) {
        showError('servicesError', 'Please select at least one additional service.');
        valid = false;
    }

    // 5. Terms and Conditions
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        showError('termsError', 'You must accept the terms and conditions.');
        valid = false;
    }

    // If valid
    if (valid) {
        alert('Booking submitted successfully!');
        form.reset(); // optional
    }

});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(err => {
        err.textContent = '';
    });
}
