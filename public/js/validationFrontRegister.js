let firstName = document.getElementById('firstName');
let flashErrors = document.querySelector('.flash-errors')
let iconCheck = document.querySelector('.form__state-validation')

const expresiones = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,20}$/,
};

firstName.addEventListener('input', function(e) {
    if(e.target.value.length >= 2 && expresiones.firstName.test(e.target.value)) {
        flashErrors.style.display = 'none'
        iconCheck.classList.remove('fa-circle-xmark')
        iconCheck.classList.add('fa-circle-check')
        iconCheck.style.color = 'green'
        iconCheck.style.opacity = '100'
    }
})
