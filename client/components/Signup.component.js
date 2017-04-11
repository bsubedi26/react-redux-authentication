import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }

  setChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
    // console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    // ACTION TO CREATE USER
    this.props.userCreate(this.state)
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)} className="col s12 center-align">
        

        <div className="card-panel">
        <h4 className="center-align card-panel blue-grey-text" style={{fontFamily: 'Comic Sans MS'}}>Register for an account below:</h4>
          
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="username" type="text" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="username">User Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="email">Email</label>
            </div>
          </div>

         <div className="row">
           <div className="input-field col s6">
           <i className="material-icons prefix">lock</i>
           <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
            <label htmlFor="password">Password</label>
           </div>
           <div className="input-field col s6">
             <i className="material-icons prefix">lock</i>
             <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
             <label htmlFor="password">Confirm Password</label>
           </div>
         </div>

          <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">Submit</button>
          <br />
          <br />
          <span className="">Already have an account? Login <Link to="/login">here</Link></span>
          </div>
        </form>
      </div>
    );
  }
};

SignupPage.propTypes = {
  userCreate: PropTypes.func.isRequired
}
