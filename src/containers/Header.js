import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logout } from 'src/actions/login';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
