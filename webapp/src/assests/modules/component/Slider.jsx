import React, {useState} from "react";

export default () => {

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
