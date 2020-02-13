import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Registration from "./Components/Registration";
import UserList from "./Components/UserList";
import ViewDetails from "./Components/ViewDetails";
function DashRoutes() {
    return (
        <main>
            <Switch>
                
                <Route path="/userlist" component={UserList} />
            </Switch>
        </main>
    )
}

export default DashRoutes