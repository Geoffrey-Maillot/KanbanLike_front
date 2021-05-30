import { connect } from 'react-redux';
import Todo from 'src/components/Todo';
import { rehydrate } from 'src/actions/login';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loading: state.utils.loading,
  theme: state.utils.theme,
  cardModalIsOpen: state.list.cardModalIsOpen,
  listModalIsOpen: state.list.listModalIsOpen,
  signupIsOpen: state.signup.signupIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  rehydrate: () => dispatch(rehydrate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
