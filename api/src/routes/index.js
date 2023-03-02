// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Router } = require('express');
const dogRouter = require("./dogRouter.js");
const tempRouter = require("./tempRouter.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogRouter);
router.use("/temperaments", tempRouter);


module.exports = router;
