import React from 'react'
import css from './Item.css';


const Item = ({ name, count, liked, likeItem, addOne }) => {

  const className = 'item' + (liked ? ' liked' : '');
  
  return (
    <div className={className}>
      <div className="itemName">{ name }</div>
      <div className="itemCount">{ count }</div>
      <div className="hideButton" onClick={likeItem}>X</div>
      <div className="addButton" onClick={addOne}>+</div>
    </div>
  )
}


export default Item
