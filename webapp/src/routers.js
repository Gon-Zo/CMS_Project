import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./assests/modules/containers/main/Error.jsx";
import Login from "./assests/modules/containers/main/Login.jsx";
import SignIn from "./assests/modules/containers/main/SignIn.jsx";
import Main from "./assests/modules/containers/main/Main.jsx";
import Count from "./assests/modules/containers/main/Count.jsx";
import List from "./assests/modules/containers/main/List.jsx";
import MainLayout from "./assests/modules/containers/layout/MainLayout.jsx";

import SystemDashboardLayout from "./assests/modules/containers/layout/SystemDashboardLayout.jsx";
import Category from "./assests/modules/containers/system/Category.jsx";
import Post from "./assests/modules/containers/system/Post.jsx";
import User from "./assests/modules/containers/system/User.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route path={"/system"}>
                        <SystemDashboardLayout>
                            <Switch>
                                <Route path={"/system/category"} component={Category}/>
                                <Route path={"/system/Post"} component={Post}/>
                                <Route path={"/system/category"} component={User}/>
                                <Route path={"/system*"} component={Error}/>
                            </Switch>
                        </SystemDashboardLayout>
                    </Route>
                    <Route path="/login" component={Login}/>
                    <Route path="/sign-in" component={SignIn}/>
                    <Route exact pate={"/:path?"}>
                        <MainLayout>
                            <Switch>
                                <Route exact path={"/"} component={Main}/>
                                <Route path={"/count"} component={Count}/>
                                <Route path={"/list"} component={List}/>
                                <Route path={"/*"} component={Error}/>
                            </Switch>
                        </MainLayout>
                    </Route>
                    <Route path={"*"} component={Error}/>
                </Switch>
            </Router>
        </div>
    )
}

