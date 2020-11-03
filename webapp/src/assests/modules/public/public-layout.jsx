import React from "react";
import MenuContainer from "../main/menu-container.jsx";

const PublicLayout = ({children}) => {
    console.log("check role")
    return (
        <div>
            <MenuContainer/>
            {children}
        </div>
    )
}

export default PublicLayout
