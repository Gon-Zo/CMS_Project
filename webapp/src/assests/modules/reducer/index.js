import {combineReducers} from 'redux'

import Count from '../../modules/count/count.reducer'
import Login from '../../modules/login/login.reducer'
import Menu from '../../modules/main/menu.reducer'
import UserTable from '../../modules/user/user-table.reducer'

export const rootReducer = combineReducers({
    Count,
    Login,
    Menu,
    UserTable
})





