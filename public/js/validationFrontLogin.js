
    console.log('estoy en el front')
    let inputEmail =  document.getElementById('email');
    let inputPass = document.getElementById('password');
    let iconEmail = document.querySelector('.icon-email');
    let iconPass = document.querySelector('.icon-password');
    let flashErrors = document.querySelector('.flash-errors')
    let flashErrorsPass = document.querySelector('.flash-errors-pass')

    const expresions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,20}$/,
    }
    inputEmail.addEventListener('input', function(e){
        
        if(e.target.value.length >= 2 && expresions.email.test(e.target.value)) {
            console.log(e.target.value)
            iconEmail.classList.add('fa-circle-check')
            iconEmail.classList.remove('fa-circle-xmark')
            flashErrors.style.display = 'none'
        } else {
            iconEmail.classList.remove('fa-circle-check')
            iconEmail.classList.add('fa-circle-xmark')
            flashErrors.style.display = 'block'
        }
    })

    inputPass.addEventListener('input', function(e){
        
        if(e.target.value.length >= 8 && expresions.password.test(e.target.value)) {
            console.log(e.target.value)
            iconPass.classList.add('fa-circle-check')
            iconPass.classList.remove('fa-circle-xmark')
            flashErrorsPass.style.display = 'none'
        } else {
            iconPass.classList.remove('fa-circle-check')
            iconPass.classList.add('fa-circle-xmark')
            flashErrorsPass.style.display = 'block'
        }
    })
