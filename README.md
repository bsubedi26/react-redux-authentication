# react-redux-authentication
Minimal react configuriation for user sign up, login &amp; authentication using JSON web token.

### Goal

This repository is an example of one possible authentication flow using [react](https://github.com/facebook/react), [redux](https://github.com/rackt/redux), [react-router](https://github.com/rackt/react-router), and [JSON web tokens (JWT)](http://jwt.io/). It is based on the implementation of a [higher-order component](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750). In other words, You can pass the components that require authentication to the higher order component to check if the user is authenticated prior to rendering that component.

**Note:** The focus here is on the client-side flow. The server included in this example is for demonstration purposes only. It uses express and mongodb/mongoose for data storage. It contains some hard-coded API endpoints for testing.

---

### Running the Example Locally
````
1. git clone git@github.com:bsubedi26/react-redux-authentication.git
2. npm install
3. Start mongodb (mongod) in another terminal
4. npm run dev
````
Then visit `localhost:3000` in your browser.

---

### How It Works

The higher-order component that does the heavy lifting is in `client/auth/requireAuth`. It exports a function which returns the higher-order component. The function takes a single argument: a child component it will wrap and pass all of its props to.

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function BaseComponent(PassedComponent) {
    class Authenticate extends React.Component {

        componentWillMount() {
            if (this.props.isAuthenticated === false) {
                browserHistory.push('/login')
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticated === false) {
                browserHistory.push('/login')
            }
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
```
In the `client/routes.js` file, the view or component is wrapped using the requireAuth function:

```javascript
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
```

When we call `requireAuth(ProtectedView)`, `Authenticate` connects to the Redux store, subscribing to the appropriate authentication state variables. It then handles authentication logic in its lifecycle methods to ensure that the protected component is not rendered if the store does not indicate successful authentication.

---
