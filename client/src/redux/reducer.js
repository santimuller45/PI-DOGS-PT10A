import { GET_BY_ID, GET_DOGS, SEARCH_DOG } from "./actions.js";

const initialState = {
    allDogs: [],
    detailDog: {}
}

function reducerDogs(state = initialState, actions) {
    switch(actions.type) {
        case GET_DOGS: { 
            return {
                ...state,
                allDogs: actions.payload
            }
        }
        case GET_BY_ID: {
            return{
                ...state,
                detailDog: actions.payload
            }
        }
        case SEARCH_DOG:{
            return {
                ...state,
                allDogs: actions.payload
            }
        }
        default: return {...state};
    }
}

export default reducerDogs;