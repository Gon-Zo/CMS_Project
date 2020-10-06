import axios from 'axios'
import {SUCCESS} from "../../utils/action-type.util";
import {ACTION_TYPE} from "../reducer/public.reducer";

export const fetchMenu = () =>{
    return (dispatch) =>{
        return axios.get("/common/menu")
            .then(res => dispatch({type: SUCCESS(ACTION_TYPE.UPDATE_MENU), payload: res.data}))
            .catch(err => console.log(err))
    }
}
