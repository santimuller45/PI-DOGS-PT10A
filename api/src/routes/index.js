const { Router } = require('express');
const { getApiDogs, getById, addDog, getTemperaments } = require("../controllers/controllers.js");
const { Dog , Temperamento } = require("../db.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", async (req,res) => {
    try{
        const getDogsApi = await getApiDogs();
        const getDogsDB = await Dog.findAll();
        if (!getDogsDB) {
            res.status(200).json(getDogsApi);
        } else {
            res.status(200).json([...getDogsApi,...getDogsDB]);
        }
        
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/dogs/:idRaza", async (req,res) => {
    try {
        const { idRaza } = req.params;
        const filteredRaza = await getById(idRaza);
        if(filteredRaza.length === 0) throw Error(`No se encontró una raza con el id:${idRaza}`);
        res.status(200).json(filteredRaza);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/dogs", async (req,res) => {
    try {
        const {name , altura , peso , añosDeVida } = req.body;
        if (!name || !altura || !peso) throw Error("Faltan datos a completar");
        const newDog = await addDog(name,altura ,peso ,añosDeVida);
        res.status(201).json(newDog);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/temperaments", async (req,res) => {
    try {
        const results = await getTemperaments()
        res.status(200).json(results);
    }catch (err) {
        res.status(400).send(err.message);
    } 
})

module.exports = router;
