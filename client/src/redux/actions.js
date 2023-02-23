import axios from "axios";

export const GET_BY_ID = "GET_BY_ID";
export const GET_DOGS = "GET_DOGS";

export const getDogs = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/dogs");
        const dogs = apiData.data;
        dispatch({
            type: GET_DOGS,
            payload: dogs
        })
    }
}

export const getById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
        const dogId = apiData.data;
        dispatch({
            type: GET_BY_ID,
            payload: dogId
        })
    }
}
