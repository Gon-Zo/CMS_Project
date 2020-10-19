import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./assests/modules/containers/Error.jsx";
import UserDashboard from "./assests/modules/containers/user/UserDashboard.jsx";
import axios from "axios";

import MainRouter from '../src/assests/modules/containers/main/router.jsx'

export default () => {

    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route path={"/"} component={MainRouter}/>
                    <Route path="/cms/user" component={UserDashboard}/>
                    <Route component={Error}/>
                </Switch>
            </Router>

        </div>
    )
}

