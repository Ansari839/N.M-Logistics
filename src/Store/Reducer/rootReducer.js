import { combineReducers } from "redux";
import { detailPageReducer } from "./serviceCardReducer";
import {offerReducer} from './offerReducer'

const rootReducer = combineReducers({
    detailPageReducer,
    offerReducer,
    
})

export default rootReducer;