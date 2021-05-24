import { connect } from 'react-redux';
import List from 'src/components/Lists/List';
import { removeListBdd } from 'src/actions/list';
import { createNewCard, cardChangeValue } from 'src/actions/card';

const mapStateToProps = (state) => ({
  inputCard: state.list.inputCard,
});

const mapDispatchToProps = (dispatch) => ({
  removeList: (id) => dispatch(removeListBdd(id)),
  onSubmit: (id) => dispatch(createNewCard(id)),
  onChange: (name, value) => dispatch(cardChangeValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
