import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./assests/modules/containers/Error.jsx";
import UserDashboard from "./assests/modules/containers/user/UserDashboard.jsx";
import Login from "./assests/modules/containers/Login.jsx";
import SignIn from "./assests/modules/containers/SignIn.jsx";
import Layout from "./assests/modules/containers/Layout.jsx";
import Main from "./assests/modules/containers/Main.jsx";
import Count from "./assests/modules/containers/Count.jsx";
import Board from "./assests/modules/containers/user/Board.jsx";
import Post from "./assests/modules/containers/user/Post.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <Layout>
                            <Switch>
                                <Route path={"/"} component={Main}/>
                                <Route path={"/count"} component={Count}/>
                            </Switch>
                        </Layout>
                    </Route>
                    <Route path={"/count"} component={Count}/>
                    <Route path="/user">
                        <UserDashboard>
                            <Switch>
                                <Route path={`/user/board`} component={Board}/>
                                <Route path={`/user/post`} component={Post}/>
                            </Switch>
                        </UserDashboard>
                    </Route>
                    <Route path="/login" component={Login}/>
                    <Route path="/sign-in" component={SignIn}/>
                    <Route path={"*"} component={Error}/>
                </Switch>
            </Router>

        </div>
    )
}

