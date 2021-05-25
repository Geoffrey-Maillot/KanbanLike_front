/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';
import List from 'src/components/Lists/List';
import { removeListBdd, openCloseListModal, changeValue } from 'src/actions/list';
import { createNewCard, removeCard, openCloseCardModal, savePositionCard } from 'src/actions/card';

const mapStateToProps = (state) => ({
  inputCard: state.list.inputCard,
});

const mapDispatchToProps = (dispatch) => ({
  removeList: (id) => dispatch(removeListBdd(id)),
  removeCard: (id) => dispatch(removeCard(id)),
  onSubmit: (id) => dispatch(createNewCard(id)),
  onChange: (name, value) => dispatch(changeValue(name, value)),
  openCloseListModal: () => dispatch(openCloseListModal()),
  openCloseCardModal: () => dispatch(openCloseCardModal()),
  savePositionCard: (listId, cardId, position) =>
    dispatch(savePositionCard(listId, cardId, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
