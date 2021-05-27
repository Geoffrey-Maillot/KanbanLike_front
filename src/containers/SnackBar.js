import { connect } from 'react-redux';
import SnackBar from 'src/components/SnackBar';
import { closeSnackBar } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  open: state.utils.snackBar.open,
  typeColor: state.utils.snackBar.typeColor,
  message: state.utils.snackBar.message,
});

const mapDispatchToProps = (dispatch) => ({
  handlerClose: () => dispatch(closeSnackBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
