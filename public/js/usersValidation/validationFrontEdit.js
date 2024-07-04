let firstName = document.getElementById("firstName-user");
let lastName = document.getElementById("lastName-user");
let birthDate = document.getElementById("birthDate");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById('submit-btn')
let formEdit = document.getElementById('form-edit')

const expresiones = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,20}$/,
};
const campos = {
    firstName: false,
    lastName: false,
    birthDate: false,
    email: false,
    password: false,
};

//FIRST NAME INPUT
firstName.addEventListener("focus", function (e) {
    let errorsName = document.getElementById("firstNameError");
    errorsName.style.display = "none";
    
    if(firstName.value.length >= 2 && expresiones.firstName.test(e.target.value) ) {
        errorsName.style.display = 'none';
    } else {
        errorsName.style.display = 'block'
    }

});
firstName.addEventListener("blur", function () {
    let errorsName = document.getElementById("firstNameError");
    errorsName.style.display = 'none'
});

firstName.addEventListener("input", function (e) {
let errorsName = document.querySelector(".flash-errors");

if (
    e.target.value.length >= 2 &&
    expresiones.firstName.test(e.target.value)
) {
    errorsName.style.display = "none";
    campos.firstName = true
} else {
    errorsName.style.display = "block";
}
});

//LAST NAME INPUT

lastName.addEventListener("focus", function (e) {
    let errorsLastName = document.getElementById('lastNameError');
    errorsLastName.style.display = "none";
    
    if(lastName.value.length > 2 && expresiones.lastName.test(e.target.value) ) {
        errorsLastName.style.display = 'none';
    } else {
        errorsLastName.style.display = 'block'
    }
});

lastName.addEventListener("blur", function () {
    let errorsLastName = document.getElementById('lastNameError');
    errorsLastName.style.display = "none";
});

lastName.addEventListener("input", function (e) {
    console.log("estoy en el lastname");
    let errorsLastName = document.getElementById('lastNameError');

if (e.target.value.length >= 2 && expresiones.lastName.test(e.target.value)) {
    errorsLastName.style.display = "none";
    campos.lastName = true
} else {
    errorsLastName.style.display = "block";
}
});

//EMAIL INPUT

email.addEventListener("focus", function (e) {
    let emailErrors = document.getElementById('emailError')
    if(e.target.value.length >= 1 && expresiones.email.test(e.target.value)) {
        emailErrors.style.display = 'none'
    } else {
        emailErrors.style.display = "block";
    }
    
});
email.addEventListener("blur", function () {
    let emailErrors = document.getElementById('emailError')
    emailErrors.style.display = "none";
});

email.addEventListener("input", function (e) {
    let errorsEmail = document.getElementById('emailError')

    if (e.target.value.length >= 2 && expresiones.email.test(e.target.value)) {
        errorsEmail.style.display = "none";
        campos.email = true
    } else {
        errorsEmail.style.display = "block";
    }
    });

//PASSWORD INPUT

password.addEventListener("focus", function (e) {
    let errorsPassword = document.getElementById('passwordError');
    if(e.target.value.length == 0) {
        errorsPassword.style.display = 'none'
    }
    if(e.target.value >= 1 && !expresiones.password.test(e.target.value)) {
        errorsPassword.style.display = "block";
    }
});
password.addEventListener("blur", function () {
    let errorsPassword = document.getElementById('passwordError');
    errorsPassword.style.display = "none";
});

password.addEventListener("input", function (e) {
    let errorsPassword = document.getElementById('passwordError');


if (e.target.value.length >= 2 && expresiones.password.test(e.target.value)) {
    errorsPassword.style.display = "none";
    campos.password = true
} else {
    errorsPassword.style.display = "block";
    }
});


submitBtn.addEventListener('click', function(e) {
    console.log(e)
    e.preventDefault();
  if (
    !campos.firstName ||
    !campos.lastName ||
    !campos.email ||
    !campos.password
  ) {
    
    formEdit.reset();
  }
})