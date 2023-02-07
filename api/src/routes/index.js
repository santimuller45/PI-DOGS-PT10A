const { Router } = require('express');
const { dbApi } = require("../controllers/getdogs");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", async (req,res) => {
    try{
        const getDogsApi = await dbApi();
        res.status(200).json(getDogsApi);
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

router.post("/dogs", (req,res) => {
    try {
        res.status(200).send('ok');
    }catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
