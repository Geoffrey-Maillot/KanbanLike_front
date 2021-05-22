import { connect } from 'react-redux';
import Todo from 'src/components/Todo';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loading: state.utils.loading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
