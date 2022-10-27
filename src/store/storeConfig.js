import { createStore, combineReducers } from 'redux';
import numerosReducer from './reducers/numeros'
import whitelabel from './whitelabel/whitelabel'
 
const reducers = combineReducers({
    numeros: numerosReducer,
    nomes: function(state, action){
        console.log('nomes')
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    },
    whiteLabel: whitelabel,
})

function storeConfig(){
    console.log('store.config')
    return createStore(reducers)
}

export default storeConfig