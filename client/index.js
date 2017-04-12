import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers/index';
import {persistStore, autoRehydrate} from 'redux-persist';

import App from 'containers/App';
import IndexPage from 'components/IndexPage';
import SignupPage from 'containers/signup/Signup';
import LoginPage from 'containers/login/Login';
import SecretAuth from 'components/SecretAuth';
import requireAuth from './auth/requireAuth';

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
  autoRehydrate()
);
persistStore(store)


const checkAuth = (store) => {
    return (nextState, replace) => {
        const { isAuthenticated } = store.getState().usersReducer;
        if (!isAuthenticated) {
            replace({ 
                pathname: '/login', 
                // query: { return_to: nextState.location.pathname } 
            });
        };
    }
}

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="auth" component={SecretAuth} onEnter={checkAuth(store)}/>
    </Route>
)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
