import {combineReducers} from 'redux'

import Count from './count.reducer'
import Login from './login.reducer'
import Public from './public.reducer'

export const rootReducer = combineReducers({
    Count,
    Login,
    Public
})





