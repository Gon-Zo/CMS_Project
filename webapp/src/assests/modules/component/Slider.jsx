import React, {useState} from "react";
import styled from "styled-components"
import { AnimateOnChange } from 'react-animation'

const WrapDiv = styled.div`
  position : relative
`;

const SlideImg = styled.img`
objectFit: cover;
 width :100%;
 height:100%;
`;

export default (props) => {

    const data = props.data

    const styles = props.styles

    const mode = props.mode

    let [i, set] = useState(0)

    const arraySize = data.length

    let show = false

    if (mode === "button"){
       show = true
    }

    return (
        <WrapDiv style={styles}>
            <ButtonMode show={show} size={arraySize} idx={i} set={set}/>
            <AnimateOnChange style={{
                display: "inlineBlock",
            }}>
                <SlideImg src={data[i]}/>
            </AnimateOnChange>
        </WrapDiv>
    )

}

const ButtonMode = (props) => {

    const show =  props.show

    if (show === true) {

        const dataSize = props.size

        const set = props.set

        const i = props.idx

        const leftTest = () => {

            set(i + 1)

            if (dataSize - 1 === i) {
                set(0)
            }

        }

        const rightTest = () => {

            set(i - 1)

            if (i === 0) {
                set(dataSize - 1)
            }
        }

        return (
            <div style={{
                position: "absolute"
            }}>
                <button onClick={() => rightTest()}>&lt;</button>
                <button onClick={() => leftTest()}>&gt;</button>
            </div>
        )
    }

    return <></>

}
