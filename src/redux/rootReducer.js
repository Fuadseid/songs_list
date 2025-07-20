import { combineReducers } from "redux";
import userReducer from "./reducer/Reducer";

const rootReducer = combineReducers({
    artists:userReducer,
})

export default rootReducer;