import React from "react";
import styled from 'styled-components'
import LeftSidebar from "../../component/left-sidebar.jsx";
import {MENU_TYPE} from "../../utils/app.eumns";


const Wrapper = styled.div`
display: flex;
width: 100%;
align-items: stretch;
`

const Container = styled.div `
background-color : #F4F2F7
`;

const DashboardLayout = ({children}) => {
    console.log("check role")

    const menuTitle = "React CMS"

    const menuUri = [
        {to: "/system/category", icon: ['fas', 'user'], name: "Test1"},
        {to: "/system/user", icon: ['fas', 'user'], name: "Test2"},
        {to: "/system/post", icon: ['fas', 'user'], name: "Test2"},
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

export default DashboardLayout
