import { GET_BY_ID, GET_DOGS } from "./actions.js";

const initialState = {
    allDogs: [],
    detailDog: []
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
            // const resultFiltered = state.allDogs.find(dog => dog.id == actions.payload)
            return{
                ...state,
                detailDog: actions.payload
            }
        }
        default: return {...state};
    }
}

export default reducerDogs;