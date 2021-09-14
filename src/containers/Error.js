import { connect } from 'react-redux';
import Error from 'src/components/Error';

const mapStateToProps = (state) => ({
  theme: state.utils.theme,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
