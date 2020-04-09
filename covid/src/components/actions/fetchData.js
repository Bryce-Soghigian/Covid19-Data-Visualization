import {fetchStateDataSuccess,fetchStateDataPending,fetchStateDataError} from './action';


export default function fetchData() {
    return dispatch => {
        dispatch(fetchStateDataPending())
        fetch("https://covidtracking.com/api/states")
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error)
            }
            dispatch(fetchStateDataSuccess())
        }).catch(err =>{
            dispatch(fetchStateDataError(err))
        })

    }
}
