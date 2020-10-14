import React , {useState} from "react";

import test1 from '../../images/test1.png'
import test2 from '../../images/test2.png'
import test3 from '../../images/test3.png'


export default () => {

    const srcArray = [
        test1 , test2 , test3
    ]


    return (
        <Slider data={srcArray}/>
    )

}

function Slider(props) {

    const data = props.data

    let [i, set] = useState(0)

    const leftTest = () => {

        set(i + 1)

        const arraySize = data.length

        if (arraySize - 1 === i) {
            set(0)
        }

    }

    const rightTest = () => {
        set(i - 1)
    }

    return (
        <div>
            <button onClick={() => rightTest()}>+</button>
            <button onClick={() => leftTest()}>-</button>
            <img src={data[`${i}`]} width="100%" height="100%"/>
        </div>
    )
}
