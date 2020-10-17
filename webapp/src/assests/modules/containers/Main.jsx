import React from "react";
import Slider from "../component/Slider.jsx";
import test1 from "../../images/test1.png";
import test2 from "../../images/test2.png";
import test3 from "../../images/test3.png";


export default () => {

    const srcArray = [
        test1 , test2 , test3
    ]

    return (
        <div>
            <Slider data={srcArray} styles={{width : "100%" , height : "35rem" }} mode={"button"}/>

            <div className="container pt-5">
                <div className="row">
                    <TopList/>
                    <TopList/>
                    <TopList/>
                </div>
            </div>

        </div>
    )
}

const TopList = () => {

    return (
        <div className="col">
            <div>
                    <span>
                       Most Best 5
                    </span>
            </div>
            <ul>
                <li>TEST1</li>
                <li>TEST2</li>
                <li>TEST3</li>
                <li>TEST4</li>
                <li>TEST5</li>
            </ul>
        </div>
    )

}
