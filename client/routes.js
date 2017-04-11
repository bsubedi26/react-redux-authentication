import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import IndexPage from 'components/IndexPage';
import SignupPage from 'containers/signup/Signup';
import LoginPage from 'containers/login/Login';
import SecretAuth from 'components/SecretAuth';
// User Authentication higher order component (pass components that require auth)
import requireAuth from './auth/requireAuth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="auth" component={requireAuth(SecretAuth)} />
        
    </Route>
)