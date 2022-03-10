const express = require('express');
const app = express();

const router = express.Router();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));
