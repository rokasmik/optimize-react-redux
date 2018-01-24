import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList';
import { createSelector } from 'reselect';


const mapStateToProps = state => {
  return {
    uids: state.items.uids
  }
}

export default connect(
  mapStateToProps
)(ItemsList)
