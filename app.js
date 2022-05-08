// Usando objeto express
const express = require("express");

// App de express
const app = express();

// Pierto en que vamos a ver nuestra app. localhost:3000
const port = 3000;

// path inicial, respoderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx');
});

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"};
    res.send(explorer);
});

// Query Params: Recibir parámetros por la url
// localhost:3000/explorers/carlo
// req.params = {"explorarName": "carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
