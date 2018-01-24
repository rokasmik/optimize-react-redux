import { connect } from 'react-redux'
import ItemsList from '../components/Items';
import { createSelector } from 'reselect';
import { hideItem, addOneToCount } from '../actions/items'


const visibleItemsSelector = createSelector(
  state => state.items.uids,
  state => state.items.byUid,
  (uids, items) => uids.map(uid => items[uid])
)

const mapStateToProps = state => {
  return {
    items: visibleItemsSelector(state)
  }
}

const mapDispatchToProps = {
  hideItem,
  addOneToCount
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList)
