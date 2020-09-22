import {SUCCESS, REQUEST, FAILURE} from '../../utils/action-type.util'
import {ACTION_TYPE} from '../reducer/login.reducer'

export function onLogin (dispatch , payload){

    // console.log("payload" , JSON.stringify(payload))

    dispatch({type: REQUEST(ACTION_TYPE.UPDATE_LOGIN)})

    setTimeout(function() {
        dispatch({type:SUCCESS(ACTION_TYPE.UPDATE_LOGIN)})
    }, 10000);

}

export const onTest = () => ({type: REQUEST(ACTION_TYPE.UPDATE_LOGIN)})
