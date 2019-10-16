import {connect} from "react-redux";
import {CLASSIFY_ASYNC_ACTION} from "@actions/week"
const mapStateToProps = (state)=>({
    classIfy:state.goods.classIfy
})

const mapDispacthToProps = (dispatch)=>({
    handleAsyncClassify(){
        dispatch(CLASSIFY_ASYNC_ACTION())
    }
})

export default connect(mapStateToProps,mapDispacthToProps)