import { connect } from 'react-redux';
import List from 'src/components/Lists/List';
import { removeListBdd, openCloseListModal, changeValue } from 'src/actions/list';
import { createNewCard, removeCard } from 'src/actions/card';

const mapStateToProps = (state) => ({
  inputCard: state.list.inputCard,
});

const mapDispatchToProps = (dispatch) => ({
  removeList: (id) => dispatch(removeListBdd(id)),
  removeCard: (id) => dispatch(removeCard(id)),
  onSubmit: (id) => dispatch(createNewCard(id)),
  onChange: (name, value) => dispatch(changeValue(name, value)),
  openCloseListModal: () => dispatch(openCloseListModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
