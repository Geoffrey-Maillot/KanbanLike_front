import { connect } from 'react-redux';
import CardModal from 'src/components/Modals/CardModal';
import { changeValue } from 'src/actions/list';
import { submitPatchCard, openCloseCardModal } from 'src/actions/card';

const mapStateToProps = (state) => ({
  inputCardModal: state.list.inputCardModal,
theme: state.utils.theme,

  theme: state.utils.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(changeValue(name, value)),
  submitPatchCard: (cardId) => dispatch(submitPatchCard(cardId)),
  openCloseCardModal: () => dispatch(openCloseCardModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
