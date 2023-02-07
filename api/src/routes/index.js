const { Router } = require('express');
const { dbApi } = require("../controllers/getdogs");
const { Dog , Temperamento } = require("../db.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", async (req,res) => {
    try{
        const getDogsApi = await dbApi();
        const getDogsDB = await Dog.findAll();
        res.status(200).json([...getDogsApi, ...getDogsDB]);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/dogs/:idRaza", (req,res) => {
    try {
        const { idRaza } = req.params;
        res.status(200).send('ok')
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/dogs", async (req,res) => {
    try {
        const { name , altura , peso , añosDeVida } = req.body;
        const newDog = await Dog.create({name,altura ,peso ,añosDeVida});
        res.status(201).send(newDog);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/temperaments", async (req,res) => {
    try {
        res.status(200).send('ok')
    }catch (err) {
        res.status(400).send(err.message);
    } 
})

module.exports = router;
