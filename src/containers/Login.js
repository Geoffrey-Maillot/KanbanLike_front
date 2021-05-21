import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValue, sendLogin } from 'src/actions/login';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(changeValue(name, value)),
  onSubmit: () => dispatch(sendLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
