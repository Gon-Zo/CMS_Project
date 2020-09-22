import {SUCCESS , FAILURE , REQUEST} from "../../utils/action-type.util";

export const ACTION_TYPE = {
    UPDATE_LOGIN: "login/UPDATE_LOGIN",
    RESET: "login/RESET"
}

const initState = {
    loading: false,
    updateSuccess: false,
    errorMessage : null,
    payload: false
}

export default (state = initState, action) => {

    switch (action.type) {
        case SUCCESS(ACTION_TYPE.UPDATE_LOGIN):
            return {
                ...initState,
                loading: false,
                updateSuccess: true,
                payload: true
            }
        case REQUEST(ACTION_TYPE.UPDATE_LOGIN) :
            return {
                ...initState,
                loading: true
            }
        case FAILURE(ACTION_TYPE.UPDATE_LOGIN)   :
            return {
                ...initState,
                errorMessage: action.payload
            }
        case ACTION_TYPE.RESET:
            return {
                ...initState
            }
        default:
            return state
    }

}
