// importiamo express
const express = require("express");
const app = express();
const port = 3030;

// mettiamo il server in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

// definiamo la prima rotta
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// creiamo un array

// creiamo una rotta che restituisca un oggetto json con l'array appena creata

// configuriamo gli asset statici
