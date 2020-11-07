import React, {useEffect, useState} from "react";

import test1 from "../../images/test1.png";
import test2 from "../../images/test2.png";
import test3 from "../../images/test3.jpg";
import ImageSlider from "../../component/image-slider.jsx";


const ImageSliderContainer = () =>{

    const [srcArray  , setSrcArray ]= useState([])


    useEffect(()=>{

        setSrcArray([test1, test2, test3])

    } , [])

    if (srcArray.length === 0) return <div><span>Load</span></div>

    return (
        <ImageSlider data={srcArray} styles={{width: "100%", height: "29rem"}} mode={"button"}/>

    )

}

export default ImageSliderContainer
