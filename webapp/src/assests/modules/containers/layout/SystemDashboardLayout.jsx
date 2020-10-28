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

    const menuTitle = "React CMS"

    const menuUri = [
        {to : "/system/test1" , icon : ['fas', 'user'] , name : "Test1"},
        {to : "/system/test2" , icon : ['fas', 'user'] , name : "Test2"},
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
