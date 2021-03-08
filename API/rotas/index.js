const express = require("express");
var fs = require("fs");
const router = express.Router();


router.get("/navers", (req, res, next) => {

    if(!fs.readFileSync("./database_navers.json").length == 0){

        naversIndex = JSON.parse(fs.readFileSync("./database_navers.json"))

        naversIndex.forEach(function(del){ delete del.projects });

        res.status(200).send(naversIndex)

    }

    else {    

        res.status(404).send("Lista de navers em branco")

    }

});

router.get("/projetos", (req, res, next) => {

    if(!fs.readFileSync("./database_projetos.json").length == 0){

        projetosIndex = JSON.parse(fs.readFileSync("./database_projetos.json"))

        projetosIndex.forEach(function(del){ delete del.navers });

        res.status(200).send(projetosIndex)

    }

    else {    

        res.status(404).send("Lista de projetos em branco")

    }
});


module.exports = router;