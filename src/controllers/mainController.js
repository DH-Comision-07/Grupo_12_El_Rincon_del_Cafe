/* Require */
const express = require('express');
const path = require('path');
const productsService = require('../data/productsService');

const mainController = {
  index: async (req, res) => {
    try {
      // Obtén los primeros 4 productos de la categoría "BEBIDA"
      const bebida = await productsService.getTopProduct(1);

      // Renderiza la plantilla EJS con los productos
      return res.render('main/index', {
        categoryId: 1,
        bebida: bebida,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los productos más vendidos');
    }
  },
  // ...
  contact: async (req, res) => {
    try {
      return res.render('main/contact');
    } catch (error) {}
  },
  aboutUs: async (req, res) => {
    try {
      return res.render('main/aboutUs');
    } catch (error) {}
  },
  suscription: async (req, res) => {
    try {
      return res.render('main/suscripcion');
    } catch (error) {}
  },
};

module.exports = mainController;
