const axios = require('axios');
const { Dog, Temperamento } = require("../db.js");
const { API_KEY } = process.env;
const urlApi = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
let results;

const getApiDogs = async () => {
    await axios.get(urlApi)
        .then(res => results = res.data)
        .catch(error => console.log(error));
    return results
}

const getById = async (id) => {
    const apiDB = await getApiDogs();
    const filtered = apiDB.filter(elem => elem.id == id);
    return filtered;
}

const addDog = async (name,altura,peso,añosDeVida) => {
    const newDog = await Dog.create({name,altura ,peso ,añosDeVida});
    return newDog;
}

const getTemperaments = async () => {
    const apiDB = await getApiDogs();
    let findTemp = apiDB.map(dog => dog.temperament);
    // for (let i=0 ; i < findTemp.length; i++) {
    //     if(findTemp[i] === findTemp[i++]) findTemp[i] = findTemp[i++]
    // }
    // let results = findTemp.reduce((acc,item) => {
    //     if(!acc.includes(item)) {
    //         acc.push(item)
    //     }
    //     return acc;
    // },[]);
    return findTemp;
}


module.exports = {
    getApiDogs,
    getById,
    addDog,
    getTemperaments
}
