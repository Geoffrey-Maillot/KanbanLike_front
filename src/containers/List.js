/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';
import List from 'src/components/Lists/List';
import { removeListBdd, openCloseListModal, changeValue } from 'src/actions/list';
import { createNewCard, savePositionCard } from 'src/actions/card';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  removeList: (id) => dispatch(removeListBdd(id)),
  onSubmit: (id) => dispatch(createNewCard(id)),
  onChange: (name, value) => dispatch(changeValue(name, value)),
  openCloseListModal: () => dispatch(openCloseListModal()),

  savePositionCard: (listId, cardId, position) =>
    dispatch(savePositionCard(listId, cardId, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
