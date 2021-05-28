import { connect } from 'react-redux';
import Content from 'src/components/Content';
import { createNewList, changeValue } from 'src/actions/list';

const mapStateToProps = (state) => ({
  inputList: state.list.inputList,
  theme: state.utils.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(createNewList()),
  onChange: (name, value) => dispatch(changeValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
