import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG";
export const ADD_DOG = "ADD_DOG"
export const GET_TEMP = "GET_TEMP";
export const ORDER_CARDS = "ORDER_CARDS";
export const FILTERED = "FILTERED";

export const getDogs = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/dogs");
        const dogs = apiData.data;
        dispatch({
            type: GET_DOGS,
            payload: dogs
        });
    }
};

export const searchDog = (nombre) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/dogs?name=${nombre}`);
        const dog = apiData.data;
        dispatch({
            type: SEARCH_DOG,
            payload: dog
        });
    }
};

export const addDog = (nombre, altura, peso , añosDeVida) => {
    return async function (dispatch) {
        const apiData = await axios.post('http://localhost:3001/dogs', { nombre , altura , peso , añosDeVida });
        const newDog = apiData.data;
        dispatch({
            type: ADD_DOG,
            payload: newDog
        });
    }
};

export const getTemp = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/temperaments");
        const temps = apiData.data;
        dispatch({
            type: GET_TEMP,
            payload: temps
        })
    }
};

export const orderCards = (condicion) => {
    return {
        type: ORDER_CARDS,
        payload: condicion
    }
};

export const filtered = (condicion) => {
    return {
        type: FILTERED,
        payload: condicion
    }
};