//storu^'u veri tabanı gibi düşünebiliriz.state veritabanı

import {createStore} from "redux"

import reducers from "./index"
//index deki reducureları cektik.
export default function configureStore(){
    return createStore(reducers)
}

