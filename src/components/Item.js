import React from 'react'
import css from './Item.css';


const Item = ({ name, count, hideItem, addOne }) => (
  <div className="item">
    <div className="itemName">{ name }</div>
    <div className="itemCount">{ count }</div>
    <div className="hideButton" onClick={hideItem}>X</div>
    <div className="addButton" onClick={addOne}>+</div>
  </div>    
)

export default Item
