const express = require('express');
const app = express();
const router = require('./routes/router');

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});
server.on('error', (error) => console.log(`hubo un error ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/productos', router);
