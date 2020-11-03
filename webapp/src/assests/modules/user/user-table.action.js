import {SUCCESS} from "../../utils/action-type.util";
import {ACTION_TYPE} from "./user-table.reducer";

export const _onUpdateToHeader = (payload) => {
    return {
        type: SUCCESS(ACTION_TYPE.UPDATE_DATA2),
        payload: payload
    }
}
