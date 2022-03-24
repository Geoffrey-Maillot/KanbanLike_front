import { connect } from 'react-redux';
import ListModal from 'src/components/Modals/ListModal';

import { openCloseListModal, submitPatchList, changeValue } from 'src/actions/list';

const mapStateToProps = (state) => ({
  inputListModal: state.list.inputListModal,
  theme: state.utils.theme,
  listId: state.list.listId,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(changeValue(name, value)),
  submitPatchList: (listId) => dispatch(submitPatchList(listId)),
  openCloseListModal: () => dispatch(openCloseListModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListModal);
