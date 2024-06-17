const { check } = require('express-validator');
const path = require('path');


let validateProduct = [
    check('name')
        .notEmpty().withMessage('El campo nombre no puede estar vacío').bail()
        .isLength({min:5}).withMessage('El nombre debe tener almenos 5 caracteres'),
    check('description')
        .notEmpty().withMessage('El campo descripcion no puede estar vacío').bail()
        .isLength({min:20}).withMessage('La descripción debe tener almenos 20 caracteres'),
];

module.exports = validateProduct



