import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function BaseComponent(PassedComponent) {
    class Authenticate extends Component {

        componentWillMount() {
            // if (this.props.isAuthenticated === false) {
            //     browserHistory.push('/login')
            // }
            this.checkAuth(this.props.isAuthenticated);
        }
        
        componentWillReceiveProps (nextProps) {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillUpdate(nextProps) {
            this.checkAuth(this.props.isAuthenticated);
        }

        checkAuth(isAuthenticated) {
            if (!isAuthenticated) {
                browserHistory.push('/login')
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <PassedComponent {...this.props} />
                        : null
                    }
                </div>
            )
        }
    }


    Authenticate.propTypes = {
       isAuthenticated: PropTypes.bool.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.usersReducer.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);

}
