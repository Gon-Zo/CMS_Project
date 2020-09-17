import React from "react";
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Main from './assests/modules/main/main.jsx'
import Count from './assests/modules/count/count.jsx'

export default () =>{
   return (
       <Router>
           <Switch>
                <Route exact path={"/"} component={Main} />
                <Route path={"/count"} component={Count}/>
           </Switch>
       </Router>
   )
}
