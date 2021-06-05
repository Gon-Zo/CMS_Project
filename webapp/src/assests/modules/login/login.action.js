import {SUCCESS, REQUEST, FAILURE} from '../../utils/action-type.util'
import {ACTION_TYPE} from './login.reducer'
import axios from 'axios'

export const fetchLogin = (payload, history) => {

    return async (dispatch, getState) => {

        await dispatch({type: REQUEST(ACTION_TYPE.UPDATE_LOGIN)})

        return await axios.post('/api/login', payload,
            {
                headers: {"Content-Type": `application/json`}
            })
            .then(res => {

                axios.defaults.headers.common.Authorization = res.data.message

                setTimeout(function () {
                    dispatch({
                        type: SUCCESS(ACTION_TYPE.UPDATE_LOGIN),
                        payload: res.data.message
                    })
                    history.push("/")
                }, 3000);

            })
            .catch(err => dispatch({type: FAILURE(ACTION_TYPE.UPDATE_LOGIN), payload: err}))
    }
}


export const loginByUser = payload => {

    return async (dispatch, getState) => {

        await dispatch({
            type: ACTION_TYPE.UPDATE_LOGIN,
            payload: axios.post('/api/login', payload, {
                headers: {"Content-Type": `application/json`}
            })
        })
    }
}
