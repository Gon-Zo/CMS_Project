import {combineReducers} from 'redux'

import Count from './count.reducer'
import Login from './login.reducer'

export const rootReducer = combineReducers({
    Count,
    Login
})





