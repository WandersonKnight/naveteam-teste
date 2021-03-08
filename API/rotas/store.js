const express = require("express");
var fs = require('fs');
const router = express.Router();

var navers = [];
var projetos = [];

function finished(err){
    console.log("YE");
}

router.post("/navers", (req, res, next) => {

    var id;

    if(!fs.readFileSync("./database_navers.json").length == 0) {

        navers = JSON.parse(fs.readFileSync("database_navers.json"));
        id = navers.length + 1

    }

    else{
        
        id = 0 + 1;

    }

    var naverId = { 
        name: req.body.name, 
        birthdate: req.body.birthdate, 
        admission_date: req.body.admission_date,
        job_role: req.body.job_role,
        projects: req.body.projects
    };

    res.status(201).send({
        criado: naverId
    })

    naverId = {"id": id, ...naverId};
    navers.push(naverId);

    data = JSON.stringify(navers, null, 2)

    fs.writeFile("database_navers.json", data, finished);

});

router.post("/projetos", (req, res, next) => {

    var id;

    if(!fs.readFileSync("./database_projetos.json").length == 0) {

        projetos = JSON.parse(fs.readFileSync("database_projetos.json"));
        id = projetos.length + 1

    }

    else{
        
        id = 0 + 1;

    }

    var projetoId = { 

        name: req.body.name, 
        navers: req.body.navers

    };

    res.status(201).send({
        criado: projetoId
    })

    projetoId = {"id": id, ...projetoId};
    projetos.push(projetoId);

    data = JSON.stringify(projetos, null, 2)

    fs.writeFile("database_projetos.json", data, finished);

});

module.exports = router;