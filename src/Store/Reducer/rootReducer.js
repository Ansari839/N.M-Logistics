import { combineReducers } from "redux";
import { detailPageReducer } from "./serviceCardReducer";

const rootReducer = combineReducers({
    detailPageReducer,
    
})

export default rootReducer;