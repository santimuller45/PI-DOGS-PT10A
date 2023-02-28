const { Router } = require('express');
const { getApiDogs, getQuery,getById, addDog, getTemperaments } = require("../controllers/controllers.js");
const { Dog , Temperamento } = require("../db.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", async (req,res) => {
    try{
        const { name } = req.query;
        if (!name){
            const getDogsApi = await getApiDogs();
            res.status(200).json(getDogsApi);
        }else {
            const resultQuery = await getQuery(name);
            res.status(200).json(resultQuery);
        }   
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/dogs/:idRaza", async (req,res) => {
    try {
        const { idRaza } = req.params;
        const filteredRaza = await getById(idRaza);
        res.status(200).json(filteredRaza);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/dogs", async (req,res) => {
    try {
        const { nombre , altura , peso , añosDeVida } = req.body;
        const newDog = await addDog( nombre , altura , peso , añosDeVida );
        res.status(201).json(newDog);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/temperaments", async (req,res) => {
    try {
        const results = await getTemperaments();
        res.status(200).json(results);
    }catch (err) {
        res.status(400).send(err.message);
    } 
})

module.exports = router;
