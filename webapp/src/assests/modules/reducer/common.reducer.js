import {REQUEST, SUCCESS} from "../../utils/action-type.util";

export const ACTION_TYPE = {
   ACCOUNT_USER : "common/ACCOUNT_USER",
   RESET : "common/RESET"
}
const initState = {
   load : false,
   error : null ,
   payload : null
}

export default (state = initState, action) => {
   switch (action.type) {
      case SUCCESS(ACTION_TYPE.ACCOUNT_USER):
         return {
            ...initState,
            payload: action.payload
         }
      case ACTION_TYPE.RESET :
         return {
            ...initState
         }
      default:
         return state
   }
}
