import React, {useState} from "react";
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { AnimateOnChange } from 'react-animation'

const WrapDiv = styled.div`
  position : relative
`;

const SlideImg = styled.img`
   object-fit: cover;
   width :100%;
   height:100%;
`;

const ArrowButton = styled.button`
border:none;
width:3rem;
height:5rem;
font-size:3rem;
background-color:transparent;
`

const ButtonWrap = styled.div`
position: absolute;
top: 15rem;
width: 100%;
justify-content: space-between;
display: flex;
`

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
            <ButtonWrap>
                <ArrowButton onClick={() => rightTest()}>
                    <FontAwesomeIcon icon={['fas','chevron-left']}/>
                </ArrowButton>
                <ArrowButton onClick={() => leftTest()}>
                    <FontAwesomeIcon icon={['fas','chevron-right']}/>
                </ArrowButton>
            </ButtonWrap>
        )
    }

    return <></>

}
