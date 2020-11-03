import React, {useEffect} from "react";
import TopList from "../../component/top-list.jsx";

const MainListContainer = ()=>{

    useEffect(()=>{

    },[])


    return (
        <div className="row">
            <TopList/>
            <TopList/>
            <TopList/>
        </div>
    )
}

export default MainListContainer


