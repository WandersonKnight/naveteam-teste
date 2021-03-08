const express = require("express");
const app = express();

const rotaIndex = require("./rotas/index");
const rotaStore = require("./rotas/store");
const rotaShow = require("./rotas/show");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use("/index", rotaIndex);
app.use("/store", rotaStore);
app.use("/show", rotaShow);

app.use((req, res, next) => {
    const erro = new Error("Erro de rota");
    erro.status(404);
    next(erro);
})

module.exports = app;
