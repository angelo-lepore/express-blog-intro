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
const post = [
  {
    title: "Ciambellone",
    content: "Un dolce semplice e soffice, perfetto per la colazione.",
    image: `http://localhost:${port}/images/ciambellone.jpeg`,
    tags: ["colazione", "dolce", "soffice"],
  },
  {
    title: "Cracker Barbabietola",
    content: "Snack salato a base di barbabietola.",
    image: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
    tags: ["snack", "salato", "barbabietola"],
  },
  {
    title: "Pane fritto dolce",
    content:
      "Un dolce fritto e croccante, perfetto da gustare con una spolverata di zucchero a velo.",
    image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
    tags: ["colazione", "dolce", "fritto"],
  },
  {
    title: "Pasta barbabietola",
    content: "Un primo piatto colorato e saporito.",
    image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
    tags: ["primo", "barbabietola", "colorato"],
  },
  {
    title: "Torta paesana",
    content:
      "Un dolce tipico della tradizione contadina, preparato con ingredienti semplici.",
    image: `http://localhost:${port}/images/torta_paesana.jpeg`,
    tags: ["dolce", "tradizione", "contadino"],
  },
];

// definiamo una rotta che restituisca un oggetto json con l'array appena creata
app.get("/api/post", (req, res) => {
  res.json(post);
});

// configuriamo gli asset statici
app.use(express.static("public"));
