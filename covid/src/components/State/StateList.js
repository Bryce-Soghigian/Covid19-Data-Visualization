import React from 'react'
import { connect } from 'react-redux';
import { getData, getDataPending,getDataError } from '../reducers';
import { bindActionCreators } from 'redux';
import FetchData from '../actions/fetchData'
import {store} from '../../index';

function StateList(props) {
    if(props.data === undefined){
        return <div>:(</div>
    }
    return (
        <div>
            {props.data.map(x =>{
                return x.state
            })}
        </div>
    )
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
)(StateList)