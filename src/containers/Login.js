import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { loginChangeValue, sendLogin } from 'src/actions/login';
import { openCloseSignup } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(loginChangeValue(name, value)),
  onSubmit: () => dispatch(sendLogin()),
  openSignup: () => dispatch(openCloseSignup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
