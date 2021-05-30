import { connect } from 'react-redux';
import Filter from 'src/components/Filter';

const mapStateToProps = (state) => ({
  theme: state.utils.theme,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
