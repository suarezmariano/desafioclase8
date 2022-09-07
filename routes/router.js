const express = require('express');
const router = express.Router();

let productos = [];
class Product {
  constructor(id, title, price, thumbnail) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}

router.get('/', (req, res) => {
  res.json(productos);
});

router.post('/', (req, res) => {
  let newProduct = new Product();
  newProduct = {};
  newProduct.id = productos.length + 1;
  newProduct.title = req.body.title;
  newProduct.price = req.body.price;
  newProduct.thumbnail = req.body.thumbnail;
  productos.push(newProduct);
  res.json(newProduct);
});

router.get('/:id', (req, res) => {
  let product = productos.filter((product) => product.id == req.params.id);
  if (product != '') {
    res.json(product);
  } else {
    res.json('error: producto no encontrado');
  }
});

router.delete('/:id', (req, res) => {
  let id = productos.filter((product) => product.id == req.params.id);
  if (id != '') {
    productos = productos.filter((product) => product.id != req.params.id);
    res.json('Producto eliminado');
  } else {
    res.json('Producto no encontrado');
  }
});

router.put('/:id', (req, res) => {
  let id = productos.filter((product) => product.id == req.params.id);
  if (id != '') {
    productos = productos.filter((product) => product.id != req.params.id);
    let newProduct = new Product();
    newProduct.id = req.params.id;
    newProduct.title = req.body.title;
    newProduct.price = req.body.price;
    newProduct.thumbnail = req.body.thumbnail;
    productos.push(newProduct);
    res.json(newProduct);
  } else {
    res.json('Producto no encontrado');
  }
});

module.exports = router;
