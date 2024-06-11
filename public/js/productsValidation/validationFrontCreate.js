let nameProduct = document.getElementById('name-product');
let inputRadio = document.getElementById('input-radio');
let priceProduct = document.getElementById('price');
let amountProduct = document.getElementById('amount');
let descriptionProduct = document.getElementById('descripcion');
let imageProduct = document.getElementById('file-upload');

//INPUT NAME PRODUCT
nameProduct.addEventListener('input', function(e) {
    console.log('estoy en el front')
    let error = document.querySelector('.group-product-name .flash-errors')
    if(e.target.value.length >= 5){
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
})

//INPUT CATEGORY PRODUCT
inputRadio.addEventListener('input', function(e) {
    console.log(e)
    let error = document.querySelector('.contenedor_radio .flash-errors')
    if(e.target.value == '1'||'2'||'3'||'4'){
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
})

//INPUT PRICE

priceProduct.addEventListener('input', function(e) {
    console.log('estoy en el front')
    let error = document.querySelector('.group-product-price .flash-errors')
    if(e.target.value >= 0){
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
})

// INPUT AMOUNT
amountProduct.addEventListener('input', function(e) {
    console.log('estoy en el front')
    let error = document.querySelector('.group-product-amount .flash-errors')
    if(e.target.value >= 0){
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
})

//INPUT DESCRIPTION 

descriptionProduct.addEventListener('input', function(e){
    let error = document.querySelector('.group-product-description .flash-errors')
    if(e.target.value.length >= 20){
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
})

// INPUT IMAGE

imageProduct.addEventListener('change', function(e){
    let error = document.querySelector('.contenedor-upload .flash-errors')
    let messageImage = document.querySelector('.file-name-container')
    console.log(e)
    if(e.target.files[0]){
        error.style.display = 'none'
        messageImage.innerHTML = 'La imágen se subió con éxito'
    } else {
        error.style.display = 'block'
    }
})