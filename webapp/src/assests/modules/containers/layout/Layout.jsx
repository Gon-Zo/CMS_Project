import React from "react";
import Header from "../component/Header.jsx";

export default ({children}) => {
    console.log("check role")
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
