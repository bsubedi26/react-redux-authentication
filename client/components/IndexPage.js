import React, { Component } from 'react';
import { Link } from 'react-router';

class IndexPage extends Component {
  
  render() {
    return (

      <div>

          <div className=" card-panel blue-grey lighten-4">
            <br /><br />
            <h1 className="header center">React/Redux Authentication</h1>
            <div className="row center">
              <h5 className="header col s12 light">Click below to get started with user authentication example!</h5>
            </div>
            <div className="row center">
              <Link to="/signup" className="btn-large waves-effect waves-light blue-grey lighten-1">Get Started</Link>
            </div>
            <br /><br />
          </div>

      </div>
      
    );
  }
};

export default IndexPage;