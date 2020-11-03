import React , {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu} from "./menu.action";
import Header from "../../component/Header.jsx";

const MenuContainer = () =>{

    const history = useHistory()

    const dispatch = useDispatch()

    const {data, load, error} = useSelector(state => {
        const menu = state.Menu
        return {
            data: menu.data,
            load: menu.load,
            error: menu.error
        }
    })

    useEffect(() => {
        dispatch(fetchMenu())
    }, [dispatch])

    return(
       <Header payload={data} history={history} />
    )

}

export default MenuContainer
