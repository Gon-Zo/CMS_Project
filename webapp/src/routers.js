import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./assests/modules/containers/main/Error.jsx";
import Login from "./assests/modules/containers/main/Login.jsx";
import SignIn from "./assests/modules/containers/main/SignIn.jsx";
import Main from "./assests/modules/containers/main/Main.jsx";
import Count from "./assests/modules/containers/main/Count.jsx";
import List from "./assests/modules/containers/main/List.jsx";
import Board from "./assests/modules/containers/user/Board.jsx";
import Post from "./assests/modules/containers/user/Post.jsx";
import Test1 from "./assests/modules/containers/system/Test1.jsx";
import Test2 from "./assests/modules/containers/system/Test2.jsx";
import MainLayout from "./assests/modules/containers/layout/MainLayout.jsx";
import UserDashboardLayout from "./assests/modules/containers/layout/UserDashboardLayout.jsx";
import SystemDashboardLayout from "./assests/modules/containers/layout/SystemDashboardLayout.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route path={"/system"}>
                        <SystemDashboardLayout>
                            <Switch>
                                <Route path={"/system/test1"} component={Test1}/>
                                <Route path={"/system/test2"} component={Test2}/>
                            </Switch>
                        </SystemDashboardLayout>
                    </Route>
                    <Route path={"/user"}>
                        <UserDashboardLayout>
                            <Switch>
                                <Route path={`/user/board`} component={Board}/>
                                <Route path={`/user/post`} component={Post}/>
                                <Route path={"/user*"} component={Error}/>
                            </Switch>
                        </UserDashboardLayout>
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

