import React from "react";

import TopList from "../../component/top-list.jsx";
import ImageSliderContainer from "./image-slider-container.jsx";
import MainListContainer from "./main-list.container";

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
