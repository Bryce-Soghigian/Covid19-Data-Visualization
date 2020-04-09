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
    return{
        type:FETCH_STATE_DATA_SUCCESS,
        data:data
    }
}
function fetchStateDataError(error){
    return{
        type:FETCH_STATE_DATA_ERROR,
        error:error
    }
}