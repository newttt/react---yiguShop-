import {connect} from "react-redux";
import {LIST_ACTION_ASYNC} from "@actions/week"

const mapStateToProps = (state)=>({
    cityId:state.goods.cityId
})

const mapDisPathToProps = (dispatch)=>({
    handleAsyncList(id,sortId,cityId){
        dispatch(LIST_ACTION_ASYNC(id,sortId,cityId))
    }
})

export default connect(mapStateToProps,mapDisPathToProps)