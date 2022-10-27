import { API_ALTERADO, TOKEN_ALTERADO, CODE_ALTERADO, REFRESH_TOKEN_ALTERADO } from '../actions/actionTypes'

const estadoInicial = {
    api: 'http://google.com',
    token: 'http://google.com',
    code: 'coddeindfbbadfiasf',
    refresh_token: 'nsdakdsoindggandg'
}

export default function(state = estadoInicial, action){
    // console.log(state, ' ', action )
    switch(action.type){
        case API_ALTERADO:
            return {
                ...state,
                api: action.api
            }
           
        case TOKEN_ALTERADO:
            return {
                ...state,
                token: action.token
            }
        case CODE_ALTERADO:
            return {
                ...state,
                code: action.code
            }
        case REFRESH_TOKEN_ALTERADO:
            return {
                ...state,
                Refresh_token: action.refresh_token
            }
               
        default:
           return state
    }
}