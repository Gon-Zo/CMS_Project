import {FAILURE, SUCCESS} from '../../utils/action-type.util'

export const ACTION_TYPE = {
    UPDATE_COUNT: "count/UPDATE_COUNT",
    RESET: 'count/reset'
}

const initState = {
    loading: false,
    errorMessage: null,
    updateSuccess: false,
    updateFailure: false,
    entries : 0,
}

export default (state = initState, action) => {

    switch (action.type) {
        case SUCCESS(ACTION_TYPE.UPDATE_COUNT):
            return {
                ...initState,
                loading: false,
                updateSuccess: true,
                updateFailure: false,
                entries: action.payload
            };
        case FAILURE(ACTION_TYPE.UPDATE_COUNT):
            return {
               ...initState ,
               loading: true,
            }

        case ACTION_TYPE.RESET:
            return {
                ...initState
            }

        default:
            return state
    }

}


