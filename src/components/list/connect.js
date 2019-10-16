import {connect} from "react-redux";

const mapStateToProps = (state)=>({
   list:state.goods.list
})



export default connect(mapStateToProps)