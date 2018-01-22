import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList';


const mapStateToProps = state => {

  const uids = Object.keys(state.items.byUid)
  const visibleUids = uids.filter(uid => !state.items.byUid[uid].hidden)

  return {
    uids: visibleUids
  }
}

export default connect(
  mapStateToProps
)(ItemsList)
