import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducer/user"
import goods from './reducer/goods'
import reduxThunk from "redux-thunk"
const reducer = combineReducers({
    user,
    goods
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;