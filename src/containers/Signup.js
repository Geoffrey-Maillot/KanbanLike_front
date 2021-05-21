import { connect } from 'react-redux';
import Signup from 'src/components/Signup';

import { signupChangeValue, sendSignup } from 'src/actions/signup';
import { openCloseSignup } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  firstName: state.signup.firstName,
  lastName: state.signup.lastName,
  email: state.signup.email,
  password: state.signup.password,
  signupIsOpen: state.utils.signupIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(signupChangeValue(name, value)),
  onSubmit: () => dispatch(sendSignup()),
  openCloseSignup: () => dispatch(openCloseSignup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
