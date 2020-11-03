import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// container
import DashboardLayout from "./assests/modules/public/dashboard-layout.jsx";
import CategoryContainer from "./assests/modules/category/category.container.jsx";
import PostContainer from "./assests/modules/post/post-container.jsx";
import UserContainer from "./assests/modules/user/user.container.jsx";
import LoginContainer from "./assests/modules/login/login.container.jsx";
import SignInContainer from "./assests/modules/sign-up/sign-in.container.jsx";
import MainContainer from "./assests/modules/main/main.container.jsx";
import CountContainer from "./assests/modules/count/count.container.jsx";
import Error from "./assests/modules/error/error.jsx";
import ListContainer from "./assests/modules/list/list.container.jsx";
import PublicLayout from "./assests/modules/public/public-layout.jsx";

export default () => {
    return (
        <div className="container-fluid pd-none">
            <Router>
                <Switch>
                    <Route path={"/system"}>
                        <DashboardLayout>
                            <Switch>
                                <Route path={"/system/category"} component={CategoryContainer}/>
                                <Route path={"/system/post"} component={PostContainer}/>
                                <Route path={"/system/user"} component={UserContainer}/>
                                <Route path={"/system/*"} component={Error}/>
                            </Switch>
                        </DashboardLayout>
                    </Route>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/sign-in" component={SignInContainer}/>
                    <Route exact pate={"/:path?"}>
                        <PublicLayout>
                            <Switch>
                                <Route exact path={"/"} component={MainContainer}/>
                                <Route path={"/count"} component={CountContainer}/>
                                <Route path={"/list"} component={ListContainer}/>
                                <Route path={"/*"} component={Error}/>
                            </Switch>
                        </PublicLayout>
                    </Route>
                    <Route path={"*"} component={Error}/>
                </Switch>
            </Router>
        </div>
    )
}

