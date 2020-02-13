import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userlist from "../TestData/UserList.json"
import DashRoutes from "../Dashroutes"

 class DashBoard extends Component {
    //  constructor(props){
    //      super(props)
    //      this.state={
    //         username:this.props.location.state.username
        
    //      }
    //  }
    
    render() {
        return (
            <div>
                <h1>Welcome { localStorage.getItem("username")} </h1>
                <h6>Total Users registred  : { userlist.data.length}</h6>
                <br/>
                <Link to="/userlist" > Show all users </Link>
                <DashRoutes/>
            </div>
            
        )
    }
}
export default DashBoard

