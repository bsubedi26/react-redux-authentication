import NavBar from 'components/navbar/navbar.component';
// import NavBar from '../../components/navbar/navbar.component';
import { logout } from 'actions/usersAction';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    user: state.usersReducer
  }
}

export default connect(mapStateToProps, { logout })(NavBar);