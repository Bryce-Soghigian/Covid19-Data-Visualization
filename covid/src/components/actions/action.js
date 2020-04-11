export const FETCH_STATE_DATA_PENDING = 'FETCH_STATE_DATA_PENDING';
export const FETCH_STATE_DATA_SUCCESS = 'FETCH_STATE_DATA_SUCCESS';
export const FETCH_STATE_DATA_ERROR = 'FETCH_PRODUCTS_DATA_ERROR';
export {
    fetchStateDataError,
    fetchStateDataPending,
    fetchStateDataSuccess
}

function fetchStateDataPending(){
    return {
        type: FETCH_STATE_DATA_PENDING
    }
}
function fetchStateDataSuccess(data){
    console.log(data,"data in action.js")
    return{
        type:FETCH_STATE_DATA_SUCCESS,
        payload:data
    }
}
function fetchStateDataError(error){
    return{
        type:FETCH_STATE_DATA_ERROR,
        error:error
    }
}