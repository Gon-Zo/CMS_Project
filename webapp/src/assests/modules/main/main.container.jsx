import React from "react";

import ImageSliderContainer from "./image-slider.container.jsx";
import MainListContainer from "./main-list.container.jsx";

const MainContainer = () => {

    return (
        <div>
            <ImageSliderContainer/>
            <div className="container pt-5">
                <MainListContainer/>
            </div>
        </div>
    )
}

export default MainContainer
