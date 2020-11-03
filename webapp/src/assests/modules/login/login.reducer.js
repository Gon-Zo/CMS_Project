import {SUCCESS , FAILURE , REQUEST} from "../../utils/action-type.util";

export const ACTION_TYPE = {
    UPDATE_LOGIN: "login/UPDATE_LOGIN",
    RESET: "login/RESET"
}

const initState = {
    load: false,
    error : null,
    data: null
}

export default (state = initState, action) => {

    switch (action.type) {
        case SUCCESS(ACTION_TYPE.UPDATE_LOGIN):
            return {
                ...initState,
                load: false,
                payload: action.payload
            }
        case REQUEST(ACTION_TYPE.UPDATE_LOGIN) :
            return {
                ...initState,
                load: true
            }
        case FAILURE(ACTION_TYPE.UPDATE_LOGIN)   :
            return {
                ...initState,
                load: false,
                error: action.payload
            }
        case ACTION_TYPE.RESET:
            return {
                ...initState
            }
        default:
            return state
    }

}
