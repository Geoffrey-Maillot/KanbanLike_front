import { connect } from 'react-redux';
import Lists from 'src/components/Lists';
import { fetchLists, savePositionList } from 'src/actions/list';

const mapStateToProps = (state) => ({
  lists: state.list.lists,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: () => dispatch(fetchLists()),
  savePositionList: (listId, position) => dispatch(savePositionList(listId, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
