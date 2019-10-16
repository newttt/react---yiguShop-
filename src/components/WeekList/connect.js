import {connect} from "react-redux";
import {WEEK_ACTION_ASYNC} from '@actions/week'

const mapStateToProps = (state)=>({
    week_choice:state.goods.week_choice,
    cityId:state.goods.cityId,
    page:state.goods.page
})

const mapDisPathToProps = (dispatch)=>({
    async handleAsyncWeek(cityId,page,type){
        let data = await dispatch(WEEK_ACTION_ASYNC(cityId,page,type));
        return data;
    }
})

export default connect(mapStateToProps,mapDisPathToProps)