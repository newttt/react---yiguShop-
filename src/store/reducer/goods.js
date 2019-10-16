import {handleActions} from 'redux-actions';

const defaultState = {
    week_choice:[],
    cityId:140,
    page:0,
    classIfy:[],
    list:[]
}


export default handleActions({
    week_action:(state,action)=>{
       let newWeekState = Object.assign({},state);
       if(action.payload.type){
            newWeekState.week_choice = action.payload.data;
       }else{
            newWeekState.week_choice = [... newWeekState.week_choice,...action.payload.data];
            newWeekState.page++;
       }
       return newWeekState;
    },
    classify_action:(state,action)=>{
        console.log(action);
        let newclassIfyState = Object.assign({},state);
        newclassIfyState.classIfy = action.payload;
        return newclassIfyState;
    },
    list_action:(state,action)=>{
        let newListState = Object.assign({},state);
        newListState.list = action.payload;
        return newListState;
    }
},defaultState)