import React from "react";

import ImageSliderContainer from "./image-slider-container.jsx";
import MainListContainer from "./main-list.container.jsx";

const MainContainer = () => {

    return (
        <div>
            <ImageSliderContainer/>
            <div className="container pt-5">
                <div className="row">
                    <MainListContainer/>
                </div>
            </div>
        </div>
    )
}




export default MainContainer
