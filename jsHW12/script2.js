function validatePassword() {
    const password = document.getElementById('passwordInput').value;
    const lowErr = document.getElementById('lowErr');
    const numErr = document.getElementById('numErr');
    const simbErr = document.getElementById('simbErr');
    const letErr = document.getElementById('letErr');
    
    let isWidth = true
    let hasLetter = false
    let hasDigit = false
    let hasSpecial = false
    
    if (password.length < 8) {
        isWidth = false;
    }

    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let char of password) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            hasLetter = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    if (isWidth) {
        lowErr.style.display = 'none';
    } else {
        lowErr.style.display = 'block';
    }
    if (hasDigit) {
        numErr.style.display = 'none';
    } else {
        numErr.style.display = 'block';
    }
    if (hasSpecial) {
        simbErr.style.display = 'none';
    } else {
        simbErr.style.display = 'block';
    }
    if (hasLetter) {
        letErr.style.display = 'none';
    } else {
        letErr.style.display = 'block';
    }

    if (isWidth && hasDigit && hasSpecial && hasLetter) {
        alert('Пароль корректный!');
    }
}