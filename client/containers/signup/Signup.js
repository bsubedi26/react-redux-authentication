import SignupPage from 'components/Signup.component';
import { userCreate } from 'actions/usersAction';
import { connect } from 'react-redux';

export default connect(null, { userCreate })(SignupPage);