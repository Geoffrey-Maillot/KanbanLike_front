import { connect } from 'react-redux';
import Signup from 'src/components/Modals/Signup';

import { signupChangeValue, sendSignup, openCloseSignup } from 'src/actions/signup';

const mapStateToProps = (state) => ({
  firstName: state.signup.firstName,
  lastName: state.signup.lastName,
  email: state.signup.email,
  password: state.signup.password,
  theme: state.utils.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(signupChangeValue(name, value)),
  onSubmit: () => dispatch(sendSignup()),
  openCloseSignup: () => dispatch(openCloseSignup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
