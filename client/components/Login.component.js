import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  // update state as user types in the form field
  setChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  // pass this.state to the login action when form is submitted 
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  // remove flash messages when component is unmounted
  componentWillUnmount() {
    this.props.removeMessages()
  }

  render() {
    const { flashMessages } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)} className="col s12 center-align">
          
          <div className="card-panel">
          <h4 className="center-align card-panel blue-grey-text" style={{fontFamily: 'Comic Sans MS'}}>Sign In Below:</h4>
            
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="username" type="text" className="validate" onChange={this.setChange.bind(this)} />
                <label htmlFor="username">User Name</label>
              </div>
                <span className="red-text">{flashMessages.length ? flashMessages[flashMessages.length - 1] : null}</span>
            </div>

          <div className="row">
            <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <input id="password" type="password" className="validate" onChange={this.setChange.bind(this)} />
              <label htmlFor="password">Password</label>
            </div>
          </div>

            <button className="btn btn-medium waves-effect waves-light grey lighten-1 black-text btn-flat" type="submit" name="action">Submit</button>
              <br />
                <br />
                  <span className="blue-grey-text">Don't have an account? Register <Link to="/signup">here</Link></span>
          </div>
        </form>
      </div>
    );
  }
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  removeMessages: PropTypes.func.isRequired
}