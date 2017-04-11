import LoginPage from 'components/Login.component';
import { login } from 'actions/usersAction';
import { removeMessages } from 'actions/flashMessages';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    flashMessages: state.flashMessagesReducer
  }
}

export default connect(mapStateToProps, { login, removeMessages })(LoginPage);