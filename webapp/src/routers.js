import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './assests/modules/containers/Main.jsx'
import Count from './assests/modules/containers/Count.jsx'
import Error from "./assests/modules/containers/Error.jsx";
import Login from "./assests/modules/containers/Login.jsx";
import Layout from "./assests/modules/containers/Layout.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route path={"/cms/login"} component={Login}/>
                    <Route exact pate={"/:path?"}>
                        <Layout>
                            <Switch>
                                <Route exact path={"/"} component={Main}/>
                                <Route path={"/count"} component={Count}/>
                            </Switch>
                        </Layout>
                    </Route>
                    <Route component={Error}/>
                </Switch>
            </Router>

        </div>
    )
}
