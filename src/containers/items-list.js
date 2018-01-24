import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList';
import { createSelector } from 'reselect';


const visibleItemsSelector = createSelector(
  state => state.items.uids,
  state => state.items.byUid,
  (uids, items) => uids.filter(uid => !items[uid].hidden)
)

const mapStateToProps = state => {
  return {
    uids: visibleItemsSelector(state)
  }
}

export default connect(
  mapStateToProps
)(ItemsList)
