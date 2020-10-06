import {SUCCESS} from "../../utils/action-type.util";

export const ACTION_TYPE = {
   UPDATE_MENU : "public/UPDATE_MENU",
   RESET : "public/REST"
}


const initState = {
   data : []
}

export default (state = initState , action) =>{

  switch (action.type) {
      case SUCCESS(ACTION_TYPE.UPDATE_MENU):
          return{
              ...initState ,
              data : action.payload
          }
      case ACTION_TYPE.RESET:
          return {
              ...initState
          }
      default:
          return state
  }

}
