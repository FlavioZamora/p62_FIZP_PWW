// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Configura la cadena de conexión a MongoDB Atlas
const mongoURI = 'mongodb+srv://<flazamor>:<R7adZXvXByj8EVWf>@cluster.mongodb.net/<Examen2>';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // Opcional: desactiva la función de modificación obsoleta.
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Resto del código de tu aplicación...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
