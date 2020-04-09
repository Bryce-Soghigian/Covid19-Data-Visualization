import {FETCH_STATE_DATA_PENDING,FETCH_STATE_DATA_ERROR,FETCH_STATE_DATA_SUCCESS} from '../actions/action'


const intitalState = {
    pending: false,
    data: [],
    error: null
}

export function rootReducer(state=intitalState,action){
    switch(action.type){
        case FETCH_STATE_DATA_PENDING:
            return{
                ...state,
                pending:true
            }
        case FETCH_STATE_DATA_SUCCESS:
            console.log(action.payload,"payload in rootReducer")
            return{
                ...state,
                pending:false,
                data:action.payload
            }
        case FETCH_STATE_DATA_ERROR:
            return{
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getData = state => state.data
export const getDataPending = state => state.pending
export const getDataError = state => state.error
