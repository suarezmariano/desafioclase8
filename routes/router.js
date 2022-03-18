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
    res.json('Producto no encontrado');
  }
});

router.delete('/:id', (req, res) => {
  let id = productos.filter((product) => product.id == req.params.id);
  if (id != '') {
    let products = productos.filter((product) => product.id != req.params.id);
    productos = products;
    res.json('Producto eliminado');
  } else {
    res.json('Producto no encontrado');
  }
});

router.put('/:id', (req, res) => {
  let product = productos.filter((product) => product.id == req.params.id);
  if (product != '') {
    productos = productos.filter((producto) => producto.id !== product.id);
    let newProduct = new Product();
    newProduct.id = product.id;
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
