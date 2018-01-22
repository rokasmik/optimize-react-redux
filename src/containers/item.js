import { connect } from 'react-redux'
import Item from '../components/Item'
import { hideItem, addOneToCount } from '../actions/items'


const mapStateToProps = (state, ownProps) => ({
  name: state.items.byUid[ownProps.uid].name,
  count: state.items.byUid[ownProps.uid].count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideItem: () => dispatch(hideItem(ownProps.uid)),
  addOne: () => dispatch(addOneToCount(ownProps.uid))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
