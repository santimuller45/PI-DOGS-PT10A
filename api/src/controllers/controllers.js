const axios = require('axios');
const { Dog, Temperamento } = require("../db.js");
const { API_KEY } = process.env;
const urlApi = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getApiDogs = async () => {
    let apiDB = await axios.get(urlApi);
    let resultsApi = apiDB.data.map(elem => {
        return {
            id: elem.id,
            nombre: elem.name,
            altura: {
                min:elem.height.metric.split(" -")[0],
                max:elem.height.metric.split("- ")[1],
            },
            peso: {
                min: elem.weight.metric.split(" -")[0],
                max: elem.weight.metric.split("- ")[1]
            },
            añosDeVida: elem.life_span,
            temperamento: elem.temperament,
            img: elem.image.url
        }
    })
    let resultsDB = await Dog.findAll();
    return [...resultsDB,...resultsApi];
};

const getQuery = async (prop) => {
    const resultsApi = await getApiDogs();
    const findQuery = resultsApi.filter(elem => elem.nombre === prop);
    if (findQuery.length === 0) throw Error("No se encontro la query solicitada");
    else return findQuery;
}

const getById = async (id) => {
    const apiDB = await getApiDogs();
    const filtered = apiDB.filter(elem => elem.id == id);
    if (filtered.length === 0) throw Error(`No se encontro el dog con la id:${id} solicitada`);
    else return filtered;
};

const addDog = async (nombre , altura , peso , añosDeVida ) => {
    if (!nombre || !altura || !peso) throw Error("Faltan datos a completar");
    const newDog = await Dog.create({ nombre , altura , peso , añosDeVida });
    return newDog;
};

const getTemperaments = async () => {
    const apiDB = await getApiDogs();
    let getTemp = [];
    apiDB.forEach(dog => {
        if (dog.temperamento) getTemp.push(dog.temperamento)
    })
    let resultTemp = getTemp.join(",").split(",");
    resultTemp = resultTemp.map(elem => elem.trim());
    resultTemp = resultTemp.filter((value,index,self) => self.indexOf(value) === index);
    resultTemp.forEach(temperamento => 
        Temperamento.findOrCreate({
            where:{
                name:temperamento,
            }
        })
    );
    return resultTemp;
};


module.exports = {
    getApiDogs,
    getQuery,
    getById,
    addDog,
    getTemperaments
}
