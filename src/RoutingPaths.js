import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Registration from "./Components/Registration";
import UserList from "./Components/UserList";
import ViewDetails from "./Components/ViewDetails";
function RoutingPaths() {
    return (
        <main>
            <Switch>
            <Redirect exact from="/" to={"/register"} />
                
                <Route path="/userdash" component={DashBoard} exact />
                <Route path="/viewdetails" component={ViewDetails} exact />
                <Route path="/register" component={Registration} />
                <Route path="/userlist" component={UserList} />
            </Switch>
        </main>
    )
}

export default RoutingPaths