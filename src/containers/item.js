import { connect } from 'react-redux';
import Item from '../components/Item';
import { likeItem, addOneToCount } from '../actions/items';


const mapStateToProps = (state, ownProps) => ({
  name: state.items.byUid[ownProps.uid].name,
  count: state.items.byUid[ownProps.uid].count,
  liked: state.items.byUid[ownProps.uid].liked
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  likeItem: () => dispatch(likeItem(ownProps.uid)),
  addOne: () => dispatch(addOneToCount(ownProps.uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
