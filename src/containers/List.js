/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';
import List from 'src/components/Lists/List';
import { removeListBdd, openCloseListModal } from 'src/actions/list';
import { createNewCard, savePositionCard, removeCard, changeValueCard } from 'src/actions/card';

const mapStateToProps = (state, ownProps) => ({
  inputCard: state.list.inputCard[ownProps.id],
  theme: state.utils.theme,
});

const mapDispatchToProps = (dispatch) => ({
  removeList: (id) => dispatch(removeListBdd(id)),
  removeCard: (id) => dispatch(removeCard(id)),
  onSubmit: (id) => dispatch(createNewCard(id)),
  onChange: (name, value, id) => dispatch(changeValueCard(name, value, id)),
  openCloseListModal: (listId) => dispatch(openCloseListModal(listId)),
  savePositionCard: (listId, cardId, position) =>
    dispatch(savePositionCard(listId, cardId, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
