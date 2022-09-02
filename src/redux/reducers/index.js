import {combineReducers} from "redux"
import counterReducer from "./counterReducer"

//reducurenin bir index i olmalı, redurcureların toplanması için bu tipte bir js gerekli.
const reducers = combineReducers({
    counterReducer
});

export default reducers;