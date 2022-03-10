const express = require('express');
const app = express();
const router = express.Router();

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const productos = [];

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
