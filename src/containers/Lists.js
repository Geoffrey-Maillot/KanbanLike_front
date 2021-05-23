import { connect } from 'react-redux';
import Lists from 'src/components/Lists';
import { fetchLists } from 'src/actions/list';

const mapStateToProps = (state) => ({
  lists: state.list.lists,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: () => dispatch(fetchLists()),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
