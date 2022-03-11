const express = require('express');
const router = express.Router();

const productos = [];

router.get('/', (req, res) => {
  res.json(productos);
});

router.post('/', (req, res) => {
  let newProduct = {};
  newProduct.id = productos.length + 1;
  newProduct.title = req.body.title;
  newProduct.price = req.body.price;
  newProduct.thumbnail = req.file.thumbnail;
  productos.push(newProduct);
  res.json(newProduct);
});

module.exports = router;
