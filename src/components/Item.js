import React from 'react';
import css from './Item.css';


const Item = ({ name, count, liked, likeItem, addOne }) => {

  const likeClassName = 'likeButton' + (liked ? ' liked' : '');

  return (
    <div className="item">
      <div className="itemName">{name}</div>
      <div className="itemCount">{count}</div>
      <div className="addButton" onClick={addOne}>+</div>
      <div className={likeClassName} onClick={likeItem}>{'\u2665'}</div>
    </div>
  );
};


export default Item;
