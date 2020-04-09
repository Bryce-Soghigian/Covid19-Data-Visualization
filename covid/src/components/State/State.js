import React,{useEffect} from 'react'
import FilterOptions from './FilterOptions'
import { connect } from 'react-redux';
import { getData, getDataPending,getDataError } from '../reducers';
import { bindActionCreators } from 'redux';
import FetchData from '../actions/fetchData'
import {store} from '../../index';
import StateList from './StateList'

 function State(props) {
    console.log(store)
    const {data, error, pending} = props;
    useEffect(() => {
        const {fetchData} = props;
        console.log(props,"PROOROOROOfpfdojpfdshfs")
        fetchData()
    },[])
    if(pending === true){
        return (
            <div>
                <p>Loading state...</p>
                <FilterOptions />
            </div>
        )
        }else{
            console.log(data)
        return(
            <div>
                
                <FilterOptions />
                <StateList data = {data}/>
            </div>
        )
    }

}
const mapStateToProps = state => ({
    error: getDataError(state),
    data:getData(state),
    pending: getDataPending(state)
})
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData:FetchData
},dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(State)