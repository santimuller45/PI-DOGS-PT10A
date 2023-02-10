const axios = require('axios');
const { Dog, Temperamento } = require("../db.js");
const { API_KEY } = process.env;
const urlApi = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getApiDogs = async () => {
    let apiDB = await axios.get(urlApi);
    let resultsApi = apiDB.data.map(elem => {
        return {
            id: elem.id,
            name: elem.name,
            altura: elem.height.metric,
            peso: elem.weight.metric,
            añosDeVida: elem.life_span,
            temperamento: elem.temperament,
            img: elem.image.url
        }
    })
    let resultsDB = await Dog.findAll();
    return [...resultsApi,...resultsDB]
};

const getQuery = async (prop) => {
    const resultsApi = await getApiDogs();
    const findQuery = resultsApi.filter(elem => elem.name === prop);
    if (findQuery.length === 0) throw Error("No se encontro la query solicitada");
    else return findQuery;
}

const getById = async (id) => {
    const apiDB = await getApiDogs();
    const filtered = apiDB.filter(elem => elem.id == id);
    if (filtered.length === 0) throw Error(`No se encontro el dog con la id:${id} solicitada`);
    else return filtered;
};

const addDog = async (name,altura,peso,añosDeVida) => {
    const newDog = await Dog.create({name,altura ,peso ,añosDeVida});
    return newDog;
};

const getTemperaments = async () => {
    const apiDB = await getApiDogs();
    let getTemp = apiDB.map(dog => dog.temperamento);
    let arrayTemp = getTemp.join("").split(",");
    getTemp = arrayTemp.filter((item,index) => arrayTemp.indexOf(item) === index);
    let newDBTemp = await Temperamento.bulkCreate(getTemp);
    return newDBTemp;
};


module.exports = {
    getApiDogs,
    getQuery,
    getById,
    addDog,
    getTemperaments
}
