import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    const { user } = this.props;

    // Navigation links if the user is logged in
    const userLinks = (
      <ul className="right">
          <li><Link to="/"> Home </Link> </li>
          <li><Link to="/auth"> Require Auth </Link> </li>
          <li><Link to="/"> Hello, {user.user.username} </Link> </li>
          <li onClick={this.logout.bind(this)}><Link to=""> Logout </Link> </li>
      </ul>
    );

    // Navigation links if the user is not logged in
    const guestLinks = (
      <ul className="right">
          <li><Link to="/"> Home </Link> </li>
          <li><Link to="/auth"> Require Auth </Link> </li>
          <li><Link to="/login"> Login </Link> </li>
          <li><Link to="/signup"> Sign Up </Link> </li>
      </ul>
    );

    return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper light-blue darken-1">
                <Link to="/" className="brand-logo">React-Auth</Link>
                { user.user.username ? userLinks : guestLinks }
            </div>
          </nav>
        </div>

    )
  }
};

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}