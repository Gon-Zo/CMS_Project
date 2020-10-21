import React from "react";
import styled from 'styled-components'
import LeftSidebar from "../../component/LeftSidebar.jsx";


const Wrapper = styled.div`
display: flex;
width: 100%;
align-items: stretch;
`

const Container = styled.div `
background-color : #F4F2F7
`;

export default ({children}) => {
    console.log("check role")
    return (
        <Wrapper>
            <LeftSidebar name={"System Dash"}/>
            <Container className="container-fluid">
                {children}
            </Container>
        </Wrapper>

    )

}
