import axios from 'axios'
import {FAILURE, REQUEST, SUCCESS} from "../../utils/action-type.util";

const ACTION_TYPE = {
  FETCH_MENU_DATA : "main/FETCH_MENU_DATA"
}
const initState = {
   load : false ,
   error : null,
   menuData : [],
}

export default (state = initState , action) =>{
   switch (action.type) {
      case SUCCESS(ACTION_TYPE.FETCH_MENU_DATA):
         return {
            ...state,
            menuData: action.payload,
            load: false,
            error : null
         }
      case REQUEST(ACTION_TYPE.FETCH_MENU_DATA):
         return {
            ...state,
            load: true,
            error: null
         }
      case FAILURE(ACTION_TYPE.FETCH_MENU_DATA):
         return {
            ...state,
            load : false,
            error: null
         }
      default:
         return state
   }
}

export const getToMenu = () => async (dispatch, getState) => {
   await dispatch({
      type: ACTION_TYPE.FETCH_MENU_DATA,
      payload: axios.get('/common/menu')
   })
}
export const getToMenu2 = () => async (dispatch, getState) => {
   await dispatch({
      type: ACTION_TYPE.FETCH_MENU_DATA,
      payload: axios.get('/common/menu')
   })
}
