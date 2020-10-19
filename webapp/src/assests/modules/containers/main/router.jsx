import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from "react";

import Layout from "../Layout.jsx";
import Main from "../Main.jsx";
import Count from "../Count.jsx";

export default ({match}) => {

    return (
        <Layout>
            <Route path={`${match.url}`} component={Main}/>
            <Route path={`${match.url}/count`} component={Count}/>
        </Layout>
    )
}
