import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userlist from "../TestData/UserList.json"


//assuming local json as api response
class UserList extends Component {
constructor(props){
    super(props)
    this.state={
        userlisttable:[]
    }
}
componentDidMount(){
    let userlisttable= []
    userlist.data.map(val=>{
     
        userlisttable.push(
            <tr>
        <td>{val.username}</td>
        <td>{val.email}</td>
        </tr>)
    })
    this.setState({userlisttable})
}

    render() {

        return (
            <div>
                <h1>User List</h1>

                <div>
                <table className="table table-striped" >
                <thead>
                <tr>
                    <th>USER NAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                   
                        
                    <tbody> {this.state.userlisttable}</tbody>
                   
                </table>

                </div>
                <div>
                     <Link to="/userdash" > Back </Link>
                </div>
               
            </div>
        )
    }
}
export default UserList
