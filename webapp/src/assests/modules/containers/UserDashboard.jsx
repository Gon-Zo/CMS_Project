import React , {useState} from "react";

import test1 from '../../images/test1.png'
import test2 from '../../images/test2.png'
import test3 from '../../images/test3.png'
import Slider from "../component/Slider";

export default () => {

    const srcArray = [
        test1 , test2 , test3
    ]

    return (
        <Slider data={srcArray}/>
    )

}
