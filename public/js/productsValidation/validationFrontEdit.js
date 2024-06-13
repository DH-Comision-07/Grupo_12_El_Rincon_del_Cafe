let nameProduct = document.getElementById('name-product');
let inputRadio = document.getElementById('input-radio');
let priceProduct = document.getElementById('price');
let amountProduct = document.getElementById('amount');
let descriptionProduct = document.getElementById('description');
let imageProduct = document.getElementById('file-upload');
let buttonReset = document.querySelector('.boton_reset-custom');
let buttonSubmit = document.querySelector('.boton_enviar-custom');
let validateFields = [];

//INPUT NAME PRODUCT
nameProduct.addEventListener('focus', function(e){
    let error = document.querySelector('.group-product-name .flash-errors')
    if(e.target.value.length >= 5) {
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
    
})
nameProduct.addEventListener('blur', function(){
    let error = document.querySelector('.group-product-name .flash-errors')
    error.style.display = 'none'
})

nameProduct.addEventListener('input', function(e) {
    console.log('estoy en el front')
    let error = document.querySelector('.group-product-name .flash-errors')
    if(e.target.value.length >= 5 && nameProduct.value != undefined){
        error.style.display = 'none'
        validateFields.push(true)
    } else {
        error.style.display = 'block'
        validateFields.push(false)
    }
})

//INPUT CATEGORY PRODUCT

/* inputRadio.addEventListener('focus', function(){
    let error = document.querySelector('.contenedor_radio .flash-errors')
    error.style.display = 'block'
})
inputRadio.addEventListener('blur', function(){
    let error = document.querySelector('.contenedor_radio .flash-errors')
    error.style.display = 'none'
}) */

inputRadio.addEventListener('click', function(e) {
    console.log(e)
    let error = document.querySelector('.contenedor_radio .flash-errors')
    if(e.target.value == '1'||'2'||'3'||'4'){
        error.style.display = 'none'
        validateFields.push(true)
    } else {
        error.style.display = 'block'
        validateFields.push(false)
    }
})

//INPUT PRICE

priceProduct.addEventListener('focus', function(e){
    let error = document.querySelector('.group-product-price .flash-errors')
    if (e.target.value.trim() !== '') {
        error.style.display = 'none';
    } else {
        error.style.display = 'block'
    }
})
priceProduct.addEventListener('blur', function(){
    let error = document.querySelector('.group-product-price .flash-errors')
        error.style.display = 'none'
})
priceProduct.addEventListener('input', function(e) {
    console.log('estoy en el front')
    let error = document.querySelector('.group-product-price .flash-errors')
    if(e.target.value == ''){
        error.style.display = 'block'
        validateFields.push(false)
    } else {
        error.style.display = 'none'
        validateFields.push(true)
    }
})

// INPUT AMOUNT

amountProduct.addEventListener('focus', function(e){
    let error = document.querySelector('.group-product-amount .flash-errors')
    if (e.target.value.trim() !== '') {
        error.style.display = 'none';
    } else {
        error.style.display = 'block'
    }
})
amountProduct.addEventListener('blur', function(){
    let error = document.querySelector('.group-product-amount .flash-errors')
    error.style.display = 'none'
})
amountProduct.addEventListener('input', function(e) {
    console.log('estoy en el front')
    let error = document.querySelector('.group-product-amount .flash-errors')
    if(e.target.value == ''){
        error.style.display = 'block'
        validateFields.push(false)
    } else {
        error.style.display = 'none '
        validateFields.push(true)
    }
})

//INPUT DESCRIPTION 
descriptionProduct.addEventListener('focus', function(e){
    let error = document.querySelector('.group-product-description .flash-errors')
    if (e.target.value.trim() !== '') {
        error.style.display = 'none';
    } else {
        error.style.display = 'block'
    }
})
descriptionProduct.addEventListener('blur', function(){
    let error = document.querySelector('.group-product-description .flash-errors')
        error.style.display = 'none'
})
descriptionProduct.addEventListener('input', function(e){
    let error = document.querySelector('.group-product-description .flash-errors')
    if(e.target.value.length >= 20){
        error.style.display = 'none'
        validateFields.push(true)
    } else {
        error.style.display = 'block'
        validateFields.push(false)
    }
})

// INPUT IMAGE

/* imageProduct.addEventListener('click', function(e){
    let error = document.querySelector('.contenedor-upload .flash-errors')
    let messageImage = document.querySelector('.file-name-container')
    console.log(imageProduct)

    if(e.target.files[0]){
        error.style.display = 'none'
        messageImage.innerHTML = 'La imágen se subió con éxito'
        validateFields.push(true)
    } else {
        error.style.display = 'block'
    }
}) */

// BUTTON RESET

buttonReset.addEventListener('click', function() {
    let messageImage = document.querySelector('.file-name-container')
    messageImage.innerHTML = 'Ningún archivo seleccionado'
})

//BUTTON SUBMIT

buttonSubmit.addEventListener('submit', function(e){
    let error = document.querySelector('.contenedor-upload .flash-errors')
    let messageImage = document.querySelector('.file-name-container')
    console.log(imageProduct)

    /* if(imageProduct.value == undefined || null || ''){
        e.preventDefault()
        error.style.display = 'block'
        
        validateFields.push(false)
    } else {
        validateFields.push(true)
    } */
    if(validateFields.some(validation => !validation)){
        e.preventDefault()
    }
})