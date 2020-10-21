import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./assests/modules/containers/main/Error.jsx";
import UserDashboardLayout from "./assests/modules/containers/layout/UserDashboardLayout.jsx";
import Login from "./assests/modules/containers/main/Login.jsx";
import SignIn from "./assests/modules/containers/main/SignIn.jsx";
import MainLayout from "./assests/modules/containers/layout/MainLayout.jsx";
import Main from "./assests/modules/containers/main/Main.jsx";
import Count from "./assests/modules/containers/main/Count.jsx";
import Board from "./assests/modules/containers/user/Board.jsx";
import Post from "./assests/modules/containers/user/Post.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
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

