require('dotenv').config();
const express = require("express");
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const port = 4000;

//Conexión BD

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true ,  useUnifiedTopology: true }, { useFindAndModify: false });

let db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos..."));

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/compras", require("./routes/compras-routes"));



// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(port, () => {
    console.log("El servidor esta escuchando en el puerto "+ port);
});


