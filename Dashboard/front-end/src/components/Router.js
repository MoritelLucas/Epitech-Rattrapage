import React from "react"
import Homepage from "../Pages/Login"


import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import NotFound from "../Pages/NotFound"
import Dashboard from "../Pages/Dashboard/index"
import Services from "../Pages/Services/Services"
import Googleconnect from "../Pages/Googleconnect"

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/services" component={Services}/>
                <Route path="/googleconnect" component={Googleconnect}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
