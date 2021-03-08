const { text } = require("body-parser");
const express = require("express");
var fs = require('fs');
const router = express.Router();


var naversIndex = [];
var projetosIndex = [];


router.get("/navers/:id_navers", (req, res, next) => {
 
    const id = req.params.id_navers - 1;

    if(!fs.readFileSync("database_navers.json").length == 0){

        naversIndex = JSON.parse(fs.readFileSync("database_navers.json"))
        naverFound = naversIndex[id]

        if(!fs.readFileSync("database_projetos.json").length == 0){

            projetosIndex = JSON.parse(fs.readFileSync("database_projetos.json"))
            projetosIndex.forEach(function(del){delete del.navers});

            if(0 < id < naversIndex.length){

                temp = naverFound.projects;
                temp2 = projetosIndex.filter(get => temp.includes(get.id))
                temp3 = projetosIndex.map(values => values.id);

                naverFound.projects = temp2

                for(var i = 0; i < temp.length; i++){

                    if(!temp3.includes(temp[i])){

                        console.log(`O projeto de Id: ${i + 1} não foi encontrado`);

                    }

                }

                res.status(200).send(naverFound)

            }

            else{res.status(404).send("Id não encontrado")}

        }

        else{res.status(404).send("Lista de projetos vazia")}

    }

    else{res.status(404).send("Lista de navers vazia")}

});

router.get("/projetos/:id_projetos", (req, res, next) => {

    const id = req.params.id_projetos - 1;

    if(!fs.readFileSync("database_projetos.json").length == 0){

        projetosIndex = JSON.parse(fs.readFileSync("database_projetos.json"))
        projetoFound = projetosIndex[id];

        if(!fs.readFileSync("database_navers.json").length == 0){

            naversIndex = JSON.parse(fs.readFileSync("database_navers.json"))
            naversIndex.forEach(function(del){delete del.projects});

            if(0 < id < projetosIndex.length){

                temp = projetoFound.navers;
                temp2 = naversIndex.filter(get => temp.includes(get.id));
                temp3 = naversIndex.map(values => values.id);

                projetoFound.navers = temp2

                for(var i = 0; i < temp.length; i++){

                    if(!temp3.includes(temp[i])){

                        console.log(`O usuario de Id: ${i + 1} não foi encontrado`);

                    }

                }

                res.status(200).send(projetoFound)

            }

            else{res.status(404).send("Id não encontrado")}

        }

        else{res.status(404).send("Lista de navers vazia")}

    }

    else{res.status(404).send("Lista de projetos vazia")}

});

module.exports = router;