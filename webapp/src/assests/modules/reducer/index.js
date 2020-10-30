import {combineReducers} from 'redux'

import Count from './count.reducer'
import Login from './login.reducer'
import Public from './public.reducer'

import UserTable from './user_table.reducer'

export const rootReducer = combineReducers({
    Count,
    Login,
    Public,
    UserTable
})





