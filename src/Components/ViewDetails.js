import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ViewDetails extends Component {
    constructor(props) {
        super(props);
        this.registeruser = this.registeruser.bind(this)
        this.state = {
            userdetail:this.props.location.state.userdetail,
            details:[]
        }
    }
   
    componentDidMount(){
        let details=[]
       Object.keys(this.state.userdetail).map(val=>{
           console.log(val+","+this.state.userdetail[val])
           
            details.push(
            <tr>
                <td>{val}</td>
                <td>{this.state.userdetail[val]}</td>
            </tr>
            )
        })
        this.setState({details:details})

    }
   
    registeruser(){
        this.props.history.push({
            pathname: '/userdash',
            state:{username : this.state.userdetail.username}
          })
    }
  

    render() {

        return (
            <div >
            <table>
             {this.state.details}
             </table>
             <input
                        type="button"
                        className="form-control btn btn-primary btn-block btn-lg mb15"
                        onClick={this.registeruser}
                        value="Submit"
                      />
            
            </div>
        );
    }
}

ViewDetails.propTypes = {

};

export default ViewDetails;