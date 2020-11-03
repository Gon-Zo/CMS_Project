import React from "react";
import Header from "../../component/Header.jsx";

const PublicLayout = ({children}) => {
    console.log("check role")
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default PublicLayout
