import React from "react";
import Header from "../component/Header.jsx";

export default ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
