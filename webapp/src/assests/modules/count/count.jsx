import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) =>{

    const [num , setNum] = useState(0)

    const _handlerCount = type =>{
        const temp = type === "+" ? num + 1 : num - 1
        setNum(temp)
    }

    return (
        <>
            <div>
                <button onClick={() => _handlerCount("-")}>
                    <FontAwesomeIcon icon={['far', 'minus-square']}/>
                </button>
                <span>
                {num}
            </span>
                <button onClick={() => _handlerCount("+")}>
                    <FontAwesomeIcon icon={['far', 'plus-square']}/>
                </button>
            </div>
        </>
    )
}

