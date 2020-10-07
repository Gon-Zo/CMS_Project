import {SUCCESS, REQUEST, FAILURE} from '../../utils/action-type.util'
import {ACTION_TYPE} from '../reducer/login.reducer'
import axios from 'axios'

export const fetchLogin = (payload) => {
    return (dispatch) => {
        dispatch({type: REQUEST(ACTION_TYPE.UPDATE_LOGIN)})
        return axios.post('/api/login' , payload ,{
            headers: { "Content-Type": `application/json`}
        })
            .then(res => {
                setTimeout(function () {
                    dispatch({type: SUCCESS(ACTION_TYPE.UPDATE_LOGIN)})
                }, 3000);
            })
            .catch(err => dispatch({type: FAILURE(ACTION_TYPE.UPDATE_LOGIN), payload: err}))
    }
}


