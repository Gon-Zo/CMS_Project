import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './assests/modules/component/main.jsx'
import Count from './assests/modules/component/count.jsx'
import Header from "./assests/modules/component/Header.jsx";
import Error from "./assests/modules/component/error.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Header/>
                {/*<div className="container-xl test">*/}
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route path={"/count"} component={Count}/>
                    <Route component={Error}/>
                </Switch>
                {/*</div>*/}
            </Router>
        </div>
    )
}
