import { connect } from 'react-redux';
import ListModal from 'src/components/Lists/ListModal';

import { openCloseListModal, submitPatchList, changeValue } from 'src/actions/list';

const mapStateToProps = (state) => ({
  inputListModal: state.list.inputListModal,
  isOpen: state.list.listModalIsOpen,
  theme: state.utils.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(changeValue(name, value)),
  submitPatchList: (listId) => dispatch(submitPatchList(listId)),
  openCloseListModal: () => dispatch(openCloseListModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListModal);
