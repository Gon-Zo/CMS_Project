import React, {useState} from "react";

export default (props) => {

    const data = props.data

    const styles = props.styles

    let [i, set] = useState(0)

    const arraySize = data.length

    const leftTest = () => {

        set(i + 1)

        if (arraySize - 1 === i) {
            set(0)
        }

    }

    const rightTest = () => {

        set(i - 1)

        if (i === 0){
           set(arraySize - 1)
        }
    }

    // const moveToImg = type =>{
    //     const isType = type === "+"
    //     const num = isType ? i + 1 : i - 1
    //     set(num)
    //     const isFlag = isType ? arraySize - 1 === i : set(arraySize - 1)
    // }

    return (
        <div style={styles}>
            <button onClick={() => rightTest()}>+</button>
            <button onClick={() => leftTest()}>-</button>
            <img src={data[`${i}`]} width="100%" height="100%"/>
        </div>
    )

}
