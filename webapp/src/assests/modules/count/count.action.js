import {ACTION_TYPE} from "./count.reducer";
import {SUCCESS} from "../../utils/action-type.util";

export const updateCount = payload => {
    return ({
        type: SUCCESS(ACTION_TYPE.UPDATE_COUNT),
        payload: payload
    })
}

export const reset = () => ({
    type: ACTION_TYPE.RESET
})
