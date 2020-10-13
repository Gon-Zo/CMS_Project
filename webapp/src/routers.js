import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './assests/modules/containers/Main.jsx'
import Count from './assests/modules/containers/Count.jsx'
import Error from "./assests/modules/containers/Error.jsx";
import Login from "./assests/modules/containers/Login.jsx";
import SignIn from "./assests/modules/containers/SignIn.jsx";
import Layout from "./assests/modules/containers/Layout.jsx";
import UserDashboard from "./assests/modules/containers/UserDashboard.jsx";
import SystemDashboard from "./assests/modules/containers/SystemDashboard.jsx";
import axios from "axios";

export default () => {

    const authorization =  axios.defaults.headers.common.Authorization

    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route path={"/cms/login"} component={Login}/>
                    <Route path={"/cms/sign-in"} component={SignIn}/>

                    <Route path={"/cms/user-dashboard"} component={UserDashboard}/>

                    <RouteIf path={"/cms/system-dashboard"} component={SystemDashboard} role={APP_ROLES.NONE}/>

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

const APP_ROLES = {
    NONE: "NONE",
    SYSTEM: "SYSTEM"
}

const RouteIf = ({ role , component: Component, rest}) => {
    return (
        <Route
            {...rest}
            render={props => {

                const test = rest.path

                if (role === APP_ROLES.NONE) {
                    return <TestErrorPage/>;
                }

                if (Component) {
                    return <Component {...props} />;
                }


            }}/>
    )
}

const TestErrorPage = () =>{
    return (
        <div>
           <span>
               Not Auth Go to Back
           </span>
        </div>
    )
}
