import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {updateCount} from "../../actions/count.action";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPE} from "../../reducer/count.reducer";

export default () => {

    const [num, setNum] = useState(0)

    const dispatch = useDispatch()

    const count = useSelector(state => state.Count.entries)

    const _handlerCount = type => {
        const temp = type === "+" ? num + 1 : num - 1
        setNum(temp)
        dispatch(updateCount(temp))
    }

    useEffect(() => {
        dispatch({type: ACTION_TYPE.RESET})
    }, [dispatch])

    return (
        <>
            <div>
                <button onClick={() => _handlerCount("-")}>
                    <FontAwesomeIcon icon={['far', 'minus-square']}/>
                </button>
                <div>
                    <span>State : {num}</span>
                    <br/>
                    <span>Redux : {count}</span>
                </div>
                <button onClick={() => _handlerCount("+")}>
                    <FontAwesomeIcon icon={['far', 'plus-square']}/>
                </button>
            </div>
        </>
    )

}
