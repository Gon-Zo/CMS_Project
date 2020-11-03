import {FAILURE, REQUEST, SUCCESS} from "../../utils/action-type.util";

export const ACTION_TYPE = {
   UPDATE_MENU : "public/UPDATE_MENU",
   RESET : "public/REST"
}

const initState = {
    load: false,
    error: null,
    data: []
}

export default (state = initState, action) => {

    switch (action.type) {
        case SUCCESS(ACTION_TYPE.UPDATE_MENU):
            return {
                ...initState,
                data: action.payload,
                load: false
            }
        case FAILURE(ACTION_TYPE.UPDATE_MENU):
            return {
                ...initState,
                error: action.payload,
                load: false
            }
        case REQUEST(ACTION_TYPE.UPDATE_MENU):
            return {
                ...initState,
                load: true,
            }
        case ACTION_TYPE.RESET:
            return {
                ...initState
            }
        default:
            return state
    }

}
