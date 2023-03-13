import { GET_DOGS, SEARCH_DOG , GET_TEMP, ORDER_CARDS , FILTERED } from "./actions.js";

const initialState = {
    allDogs: [],
    temperamentos: [],
    filterDogs: []
}

function reducerDogs(state = initialState, actions) {
    switch(actions.type) {
        case GET_DOGS: { 
            return {
                ...state,
                allDogs: actions.payload
            }
        }
        case SEARCH_DOG:{
            return {
                ...state,
                allDogs: actions.payload
            }
        }
        case GET_TEMP:{
            return {
                ...state,
                temperamentos: actions.payload
            }
        }
        case ORDER_CARDS:{

            const orderDogs = state.allDogs.sort((elemA, elemB) => {
                if (actions.payload === "A-Z") {
                    if (elemA.nombre < elemB.nombre) return -1;
                    if (elemB.nombre < elemA.nombre) return 1;
                    return 0;
                } else if (actions.payload === "Z-A") {
                    if (elemA.nombre < elemB.nombre) return 1;
                    if (elemB.nombre < elemA.nombre) return -1;
                    return 0;
                } else if (actions.payload === "MENOR_PESO"){
                    if (Number(elemA.peso.min) < Number(elemB.peso.min)) return -1;
                    if (Number(elemB.peso.min) < Number(elemA.peso.min)) return 1;
                    return 0;
                } else {
                    if (Number(elemA.peso.max) < Number(elemB.peso.max)) return 1;
                    if (Number(elemB.peso.max) < Number(elemA.peso.max)) return -1;
                    return 0;
                }
            });

            return {
                ...state,
                allDogs: [...orderDogs]
            }
        }
        case FILTERED: {
            let filter = [];
            if (actions.payload === "RAZAS_EXISTENTES") {
                state.allDogs.forEach(elem => {
                    if (Number(elem.id)) filter.push(elem)
                })
            }
            return {
                ...state,
                allDogs: [...filter]
            }
        }
        default: return {...state};
    }
}

export default reducerDogs;