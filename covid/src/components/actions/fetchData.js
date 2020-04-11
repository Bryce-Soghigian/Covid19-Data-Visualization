import {fetchStateDataSuccess,fetchStateDataPending,fetchStateDataError} from './action';
import axios from 'axios'

export default function fetchData() {
    return dispatch => {
        dispatch(fetchStateDataPending())
        axios.get("https://covidtracking.com/api/states")
        .then(res => {
            console.log(res.data)
            // res.data
            if(res.data.length !== 0){
                dispatch(fetchStateDataSuccess(res.data))

            }
        })
        .then(res => {
            if(res.error){
                throw(res.error)
            }
        }).catch(err =>{
            dispatch(fetchStateDataError(err))
        })

    }
}
