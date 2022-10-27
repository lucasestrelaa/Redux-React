import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from '../actions/actionTypes'

const estadoInicial = {
        min: 7,
        max: 31
}

export default function(state = estadoInicial, action){
    console.log(state, ' ', action )
    switch(action.type){
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
           
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
               
        default:
           return state
    }
}