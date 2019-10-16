import {createAction} from 'redux-actions';
import {week_choice,week_classify,goodsList}  from '@api/goods'
const WEEK_ACTION = createAction("week_action",(data,type)=>({data,type}));

export const WEEK_ACTION_ASYNC = (cityId,page,type)=>{
    return async (dispatch)=>{
        let data = await week_choice(cityId,page);
        dispatch(WEEK_ACTION(data,type));
        if(data)return true;
    }
}


const CLASSIFY_ACTION = createAction("classify_action",data=>data);
export const CLASSIFY_ASYNC_ACTION = ()=>{
    return async (dispatch)=>{
        let data = await week_classify();
        dispatch(CLASSIFY_ACTION(data))
    }
}



const LIST_ACTION = createAction("list_action",data=>data);
export const LIST_ACTION_ASYNC = (id,sortId,cityId)=>{
    return async (dispatch)=>{
        let data = await goodsList(id,sortId,cityId)
        dispatch(LIST_ACTION(data))
    }
}