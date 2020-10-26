import React from "react";
import styled from 'styled-components'
import LeftSidebar from "../../component/LeftSidebar.jsx";
import {MENU_TYPE} from "../../../utils/app.eumns";

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

    const menuUri = [
        {to : "/user/board" , icon : ['fas', 'user'] , name : "Board"},
        {to : "/user/post" , icon : ['fas', 'user'] , name : "Post"},
    ]

    return (
        <Wrapper>
            <LeftSidebar name={menuTitle} theme={MENU_TYPE.S} data={menuUri}/>
            <Container className="container-fluid">
                {children}
            </Container>
        </Wrapper>

    )

}
