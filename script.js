const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    // પહેલા ડિફોલ્ટ સબમિટ રોકો
    e.preventDefault();

    // પહેલા બધા જૂના એરર હટાવો
    clearAllErrors();

    let isValid = true;

    // 1. નામ વેલિડેશન
    const name = document.getElementById('name').value.trim();
    if(name === '') {
        showError('nameError', 'કૃપા કરીને તમારું નામ લખો');
        isValid = false;
    }

    // 2. ઈમેલ વેલિડેશન
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === '') {
        showError('emailError', 'કૃપા કરીને ઈમેલ એડ્રેસ લખો');
        isValid = false;
    } else if(!emailRegex.test(email)) {
        showError('emailError', 'કૃપા કરીને માન્ય ઈમેલ એડ્રેસ લખો');
        isValid = false;
    }

    // 3. જેન્ડર વેલિડેશન
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if(!genderSelected) {
        showError('genderError', 'કૃપા કરીને એક જેન્ડર પસંદ કરો');
        isValid = false;
    }

    // 4. વિષયો વેલિડેશન
    const selectedSubjects = document.querySelectorAll('input[name="subject"]:checked');
    if(selectedSubjects.length === 0) {
        showError('subjectError', 'કૃપા કરીને ઓછામાં ઓછું એક વિષય પસંદ કરો');
        isValid = false;
    }

    // 5. ડિક્લેરેશન વેલિડેશન
    const declaration = document.getElementById('declaration');
    if(!declaration.checked) {
        showError('declarationError', 'ફોર્મ સબમિટ કરવા માટે ડિક્લેરેશન સ્વીકારવી આવશ્યક છે');
        isValid = false;
    }

    // જો બધું સાચું હોય તો ફોર્મ સબમિટ કરો
    if(isValid) {
        alert('ફોર્મ સફળતાપૂર્વક સબમિટ થયું!');
        // અહીં તમે API કોલ અથવા બીજું કામ કરી શકો છો
        form.submit();
    }

});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearAllErrors() {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
    });
}
