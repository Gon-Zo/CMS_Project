import {ACTION_TYPE} from "../reducer/count.reducer";

export const updateCount = (payload) => async dispatch =>{
    return await dispatch({
        type: ACTION_TYPE.UPDATE_COUNT,
        payload: payload
    })
}

export const reset = () => ({
    type: ACTION_TYPE.RESET
})
