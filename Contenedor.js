const fs = require('fs');

class Contenedor {
  constructor() {
    this.productos = [];
  }

  showAll() {
    return this.productos;
  }
}

module.exports = Contenedor;
