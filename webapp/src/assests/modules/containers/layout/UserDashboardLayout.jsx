import React from "react";
import styled from 'styled-components'
import LeftSidebar from "../../component/LeftSidebar.jsx";
import {MENU_TYPE} from "../../../utils/app.eumns";
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
    console.log("check role")

    const menuTitle = "User Dash"

    return (
        <Wrapper>
            <LeftSidebar name={menuTitle} theme={MENU_TYPE.U}/>
            <Container className="container-fluid">
                {children}
            </Container>
        </Wrapper>

    )

}
