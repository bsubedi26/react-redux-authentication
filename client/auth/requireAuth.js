import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function BaseComponent(PassedComponent) {
    class Authenticate extends React.Component {

        componentWillMount() {
            
            {this.props.isAuthenticated ? null : browserHistory.push('/login') }

        }

        componentWillUpdate(nextProps) {
            
            {nextProps.isAuthenticated ? null : browserHistory.push('/login') }
            
        }

        render() {
            return (
                <PassedComponent {...this.props} />
            )
        }
    }


    Authenticate.propTypes = {
       isAuthenticated: React.PropTypes.bool.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.usersReducer.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);

}
