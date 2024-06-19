// Selección de todos los inputs
const inputs = document.querySelectorAll('input');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const clearButton = document.getElementById('clear_fields');
const helpMessage = document.getElementById('help_password');

// Reglas de validación para la contraseña
const passwordRules = {
    length: /(?=.{8,})/,
    uppercase: /(?=.*[A-Z])/,
    lowercase: /(?=.*[a-z])/,
    number: /(?=.*\d)/,
    special: /(?=.*[!@#$%^&*"~])/,

};

// Mensajes de ayuda para la contraseña
const passwordMessages = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special')
};

// Validación en tiempo real de la contraseña
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    for (const [rule, regex] of Object.entries(passwordRules)) {
        if (regex.test(password)) {
            passwordMessages[rule].classList.remove('invalid');
            passwordMessages[rule].classList.add('valid');
        } else {
            passwordMessages[rule].classList.remove('valid');
            passwordMessages[rule].classList.add('invalid');
        }
    }
    // Validar confirmación de contraseña
    validateConfirmPassword();
});


// Validar confirmación de contraseña
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

function validateConfirmPassword() {
    const helpConfirmPassword = document.getElementById('help_confirm_password');
    const coincide = confirmPasswordInput.value === passwordInput.value;
    confirmPasswordInput.classList.toggle('valid', coincide );
    confirmPasswordInput.classList.toggle('invalid', !coincide );
    helpConfirmPassword.classList.toggle('visible_item', !coincide );
    helpConfirmPassword.classList.toggle('hidden_item', coincide );
}

//validar otros inputs
const validationRules = {
    name: value => /^[A-Za-z\s]+$/.test(value) && value !== "",
    lastname: value => /^[A-Za-z\s]+$/.test(value) && value !== "",
    age: value => !isNaN(value) && parseInt(value) >= 18 && parseInt(value) <= 100 && value !== "",
    birthdate: value => {
        const birthdate = new Date(value);
        const today = new Date();
        const ageFromBirthdate = today.getFullYear() - birthdate.getFullYear();
        return !isNaN(ageFromBirthdate) && ageFromBirthdate >= 18 && ageFromBirthdate <= 100 && value !== "";
    },
    email: value => /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i.test(value) && value !== ""
};


let eventosEscuchados = ["input", "focus", "blur"];
inputs.forEach(input => {
    eventosEscuchados.forEach(evento => input.addEventListener( evento, () => {
        validateInput(input);
    })) 
});

function validateInput(input) {
    const isValid = validationRules[input.id](input.value.trim());
    input.classList.toggle('invalid', !isValid);
    input.classList.toggle('valid', isValid);
    const helpInpunt = document.getElementById(`help_${input.id}`);
    helpInpunt.classList.toggle('hidden_item', isValid);
}