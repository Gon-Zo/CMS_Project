import React from "react";
import styled from "styled-components"

import Slider from "../../component/Slider.jsx";

import test1 from "../../../images/test1.png";
import test2 from "../../../images/test2.png";
import test3 from "../../../images/test3.jpg";

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

    const ListWrap = styled.ul`
    list-style:none;
    margin-bottom : 0;
    `;

    const ListItem = styled.li`
    `;

    return (
        <div className="col">
            <div>
                    <span>
                       Most Best 5
                    </span>
            </div>

            <ListWrap className="mt-2">
                <ListItem>TEST1</ListItem>
                <ListItem>TEST2</ListItem>
                <ListItem>TEST3</ListItem>
                <ListItem>TEST4</ListItem>
                <ListItem>TEST5</ListItem>
            </ListWrap>
        </div>
    )

}
