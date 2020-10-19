import React from "react";
import styled from 'styled-components'
import LeftSidebar from "../../component/LeftSidebar.jsx";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Board from "./Board.jsx";
// import Post from "./Post.jsx";

const Wrapper = styled.div`
display: flex;
width: 100%;
align-items: stretch;
`

const Container = styled.div `
background-color : #F4F2F7
`;

export default ({children}) => {

    return (
        <Wrapper>
            <LeftSidebar name={"User Dash"}/>
            <Container className="container-fluid">
                {children}
            </Container>
        </Wrapper>

    )

}
