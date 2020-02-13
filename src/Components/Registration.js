import React, { Component } from 'react'

class Registration extends Component {

    constructor (props) {
        super(props);
        this.handleinputchange=this.handleinputchange.bind(this)
        this.register=this.register.bind(this)
        this.state = {
          username: "",
          email: '',
          password: ''
        }
      }
    handleinputchange(e){
        let targetName=e.target.id
        let value=e.target.value
         this.setState({[targetName]: value})
    }
    register(){
        localStorage.setItem('username', this.state.username)
       
        this.props.history.push({
            pathname: '/viewdetails',
            state: { userdetail: this.state }
          })
      
    }
    render() {
        return (
            <div>
                <h1>Registration Form</h1>
                <div className=" center-wrapper row">
                <form className="form-layout">
                        <div className="form-inputs">
                        <div className="form-group ">
                        <label>User Name : </label>
                        <input
                          type="text"
                          className="form-control input-lg"
                          placeholder="User Name"
                          id="username"
                          value={this.state.username}
                          onChange={this.handleinputchange}
                        />
                        </div>

                        <div className="form-group">
                        <label>Email : </label>
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="Email"
                          id="email"
                          value={this.state.email}
                          onChange={this.handleinputchange}
                        />
                        </div>
                        
                        <div >
                        <label>Password : </label>
                        <input
                          type="password"
                          className="form-control input-lg"
                          placeholder="Password"
                          id="password"
                          value={this.state.password}
                          onChange={this.handleinputchange}
                        />
                        </div>

                        <div className="form-group">
                         <input
                        type="button"
                        className="form-control btn btn-primary btn-block btn-lg mb15"
                        onClick={this.register}
                        value="Next"
                      />
                        </div>
                        </div>
                        </form>
                        </div>

</div>        )
    }
}
export default Registration
