const { Router } = require("express");
const dogRouter = Router();
const { getApiDogs, getQuery,getById, addDog } = require("../controllers/controllers.js");

dogRouter.get("/", async (req,res) => {
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

dogRouter.get("/:idRaza", async (req,res) => {
    try {
        const { idRaza } = req.params;
        const filteredRaza = await getById(idRaza);
        res.status(200).json(filteredRaza);
    }catch (err) {
        res.status(400).send(err.message);
    }
});

dogRouter.post("/", async (req,res) => {
    try {
        const { nombre , altura , peso , añosDeVida } = req.body;
        const newDog = await addDog( nombre , altura , peso , añosDeVida );
        res.status(201).json(newDog);
    }catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = dogRouter;