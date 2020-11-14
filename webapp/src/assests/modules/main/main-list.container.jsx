import React, {useEffect} from "react";
import TopList from "../../component/top-list.jsx";

const MainListContainer = ()=>{

    useEffect(()=>{

    },[])

    return (
        <div className="row">
            <TopList data={[0,0,0,0,0]} title={"BestTop 5"} className={"mr-5"}/>
            <TopList data={[0,0,0,0,0]} title={"MostTop 5"}/>
            <TopList data={[0,0,0,0,0]} title={"LikeTop 5"} className={"ml-5"}/>
        </div>
    )
}

export default MainListContainer


