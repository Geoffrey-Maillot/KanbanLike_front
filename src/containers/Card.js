import { connect } from 'react-redux';
import Card from 'src/components/Lists/Card';
import { checkCard, openCloseCardModal, removeCard } from 'src/actions/card';

const mapStateToProps = (state) => ({
  inputCard: state.list.inputCard,
});

const mapDispatchToProps = (dispatch) => ({
  checkCard: (status, cardId, listId) => dispatch(checkCard(status, cardId, listId)),
  openCloseCardModal: () => dispatch(openCloseCardModal()),
  removeCard: (id) => dispatch(removeCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
