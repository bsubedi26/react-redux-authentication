import axios from 'axios';

// set the jwt token in the request header for the server to authenticate user
export default function setAuthorizationToken(token) {
  console.log('set Authorization token triggered');
  if (token) {
    axios.defaults.headers.common['token'] = token;
  } else {
    delete axios.defaults.headers.common['token'];
  }
}