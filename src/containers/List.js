import { connect } from 'react-redux';
import List from 'src/components/Lists/List';
import { removeListBdd } from 'src/actions/list';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
   removeList: (id) => dispatch(removeListBdd(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
