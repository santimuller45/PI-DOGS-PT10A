import axios from "axios";

export const GET_BY_ID = "GET_BY_ID";
export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG";
export const ADD_DOG = "ADD_DOG"

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

export const getById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
        const dogId = apiData.data;
        dispatch({
            type: GET_BY_ID,
            payload: dogId
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

export const addDog = (nombre, altura, peso) => {
    return async function (dispatch) {
        const apiData = await axios.post('http://localhost:3001/dogs', { nombre , altura , peso });
        const newDog = apiData.data;
        dispatch({
            type: ADD_DOG,
            payload: newDog
        });
    }
}
