const { Router } = require("express");
const tempRouter = Router();
const {  getTemperaments } = require("../controllers/controllers.js");

tempRouter.get("/", async (req,res) => {
    try {
        const results = await getTemperaments();
        res.status(200).json(results);
    }catch (err) {
        res.status(400).send(err.message);
    } 
})

module.exports = tempRouter;