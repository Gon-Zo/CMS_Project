import {FAILURE, REQUEST, SUCCESS} from '../action-type.util'

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

// export type CountState = Readonly<typeof initState>;

export default (state = initState, action) => {

    switch (action.type) {
        case REQUEST(ACTION_TYPE.UPDATE_COUNT):
            return {
                ...initState,
                errorMessage: null,
                updateSuccess: false,
                loading: true
            };
        case FAILURE(ACTION_TYPE.UPDATE_COUNT):
            return {
                ...initState,
                loading: false,
                updateSuccess: false,
                updateFailure: true
            };
        case SUCCESS(ACTION_TYPE.UPDATE_COUNT):
            return {
                ...initState,
                loading: false,
                updateSuccess: true,
                updateFailure: false,
                entries: action.payload
            };
        case ACTION_TYPE.RESET:
            return {
                ...initState
            }
        default:
            return state
    }

}

