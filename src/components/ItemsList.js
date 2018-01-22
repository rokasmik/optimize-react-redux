import React from 'react'
import Item from '../containers/item';
import css from './ItemsList.css';


const ItemsList = ({ uids }) => (
  <div>
    <h2>Items</h2>
    <div className={"listContainer"}>
      { uids.map(uid => <Item uid={uid} key={uid} />) }
    </div>
  </div>
)

export default ItemsList
