import NavBar from '../components/NavBar.component';
import { logout } from '../actions/usersAction';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    user: state.usersReducer
  }
}

export default connect(mapStateToProps, { logout })(NavBar);