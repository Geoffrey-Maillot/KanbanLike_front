import { connect } from 'react-redux';
import Header from 'src/components/Header';

// Import actions
import { logout } from 'src/actions/login';
import { changeTheme } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  theme: state.utils.theme,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  changeTheme: (color) => dispatch(changeTheme(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
