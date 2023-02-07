const axios = require('axios');
const urlApi = "https://api.thedogapi.com/v1/breeds";

const dbApi = async () => 
    await axios.get(urlApi)
        .then(res => res.data)
        .catch(error => console.log(error));

module.exports = {
    dbApi
}
