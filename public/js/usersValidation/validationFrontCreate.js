let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let birthDate = document.getElementById("birthDate");
let email = document.getElementById("email");
let password = document.getElementById("password");

const expresiones = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,20}$/,
};

//FIRST NAME INPUT
firstName.addEventListener("focus", function () {
    let errorsName = document.querySelector(".flash-errors");
    errorsName.style.display = "block";
    
    if(firstName.value.length < 2) {
        errorsName.style.display = 'block';
    }

/* if (iconCheckName.classList.contains("fa-circle-check")) {
    errorsName.style.display = "none";
} else {
    iconCheckName.style.display = "block";
    iconCheckName.style.color = "tomato";
} */
});
firstName.addEventListener("blur", function () {
    let errorsName = document.querySelector(".flash-errors");
    errorsName.style.display = 'none'
});

firstName.addEventListener("input", function (e) {
    let iconCheckName = document.querySelector(
    "#firstNameError .form__state-validation"
);
    let errorsName = document.querySelector(".flash-errors");

if (
    e.target.value.length >= 2 &&
    expresiones.firstName.test(e.target.value)
) {
    errorsName.style.display = "none";
    /* iconCheckName.classList.remove("fa-circle-xmark");
    iconCheckName.classList.add("fa-circle-check");
    iconCheckName.style.color = "green";
    iconCheckName.style.opacity = "100"; */
} else {
    errorsName.style.display = "block";
    /* iconCheckName.classList.add("fa-circle-xmark");
    iconCheckName.classList.remove("fa-circle-check");
    iconCheckName.style.color = "red";
    iconCheckName.style.opacity = "100"; */
}
});

//LAST NAME INPUT

lastName.addEventListener("focus", function () {
    let errorsLastName = document.querySelector(".flash-errors");
errorsLastName.style.display = "block";
    let iconCheckLastName = document.querySelector(
"#lastNameError .form__state-validation"
);

/* if (iconCheckLastName.classList.contains("fa-circle-check")) {
    errorsLastName.style.display = "none";
} else {
    iconCheckLastName.style.display = "block";
    iconCheckLastName.style.color = "tomato";
} */
});
lastName.addEventListener("blur", function () {
    let errorsLastName = document.querySelector(".flash-errors");
    errorsLastName.style.display = "none";
});

lastName.addEventListener("input", function (e) {
    console.log("estoy en el lastname");
    let errorsLastName = document.querySelector(".flash-errors");
    let iconCheckLastName = document.querySelector(
    "#lastNameError .form__state-validation"
);

if (e.target.value.length >= 2 && expresiones.lastName.test(e.target.value)) {
    errorsLastName.style.display = "none";
    /* iconCheckLastName.classList.remove("fa-circle-xmark");
    iconCheckLastName.classList.add("fa-circle-check");
    iconCheckLastName.style.color = "green";
    iconCheckLastName.style.opacity = "100"; */
} else {
    errorsLastName.style.display = "block";
    /* iconCheckLastName.classList.add("fa-circle-xmark");
    iconCheckLastName.classList.remove("fa-circle-check");
    iconCheckLastName.style.color = "red";
    iconCheckLastName.style.opacity = "100"; */
}
});

// BIRTH DATE INPUT

birthDate.addEventListener("input", function (e) {
    let errorsBirthDate = document.querySelector(
    ".flash-errors"
);

if (e.target.value) {
    errorsBirthDate.style.display = "none";
} else {
    errorsBirthDate.style.display = "block";
}
});

//EMAIL INPUT

email.addEventListener("focus", function () {
    let emailErrors = document.querySelector(".flash-errors");
    emailErrors.style.display = "block";
    let iconCheckEmail = document.querySelector(
    "#emailError .form__state-validation"
);
/* if (iconCheckEmail.classList.contains("fa-circle-check")) {
    emailErrors.style.display = "none";
} else {
    iconCheckEmail.style.display = "block";
    iconCheckEmail.style.color = "tomato";
} */
});
email.addEventListener("blur", function () {
    let emailErrors = document.querySelector(".flash-errors");
    emailErrors.style.display = "none";
});

email.addEventListener("input", function (e) {
    let errorsEmail = document.querySelector(".flash-errors");
    let iconCheckEmail = document.querySelector(
    "#emailError .form__state-validation"
);

if (e.target.value.length >= 2 && expresiones.email.test(e.target.value)) {
    errorsEmail.style.display = "none";
    /* iconCheckEmail.classList.remove("fa-circle-xmark");
    iconCheckEmail.classList.add("fa-circle-check");
    iconCheckEmail.style.color = "green";
    iconCheckEmail.style.opacity = "100"; */
} else {
    errorsEmail.style.display = "block";
    /* iconCheckEmail.classList.add("fa-circle-xmark");
    iconCheckEmail.classList.remove("fa-circle-check");
    iconCheckEmail.style.color = "red";
    iconCheckEmail.style.opacity = "100"; */
}
});

//PASSWORD INPUT

password.addEventListener("focus", function () {
    let errorsPassword = document.querySelector(".flash-errors");
    errorsPassword.style.display = "block";
    let iconCheckPassword = document.querySelector(
    "#passwordError .form__state-validation"
);
/* if (iconCheckPassword.classList.contains("fa-circle-check")) {
    errorsPassword.style.display = "none";
} else {
    iconCheckPassword.style.display = "block";
    iconCheckPassword.style.color = "tomato";
} */
});
password.addEventListener("blur", function () {
    let errorsPassword = document.querySelector(".flash-errors");
    errorsPassword.style.display = "none";
});

password.addEventListener("input", function (e) {
    let errorsPassword = document.querySelector(".flash-errors");
    let iconCheckPassword = document.querySelector(
    "#passwordError .form__state-validation"
);

if (e.target.value.length >= 2 && expresiones.password.test(e.target.value)) {
    errorsPassword.style.display = "none";
    /* iconCheckPassword.classList.remove("fa-circle-xmark");
    iconCheckPassword.classList.add("fa-circle-check");
    iconCheckPassword.style.color = "green";
    iconCheckPassword.style.opacity = "100"; */
} else {
    errorsPassword.style.display = "block";
    /* iconCheckPassword.classList.add("fa-circle-xmark");
    iconCheckPassword.classList.remove("fa-circle-check");
    iconCheckPassword.style.color = "red";
    iconCheckPassword.style.opacity = "100"; */
    }
});
