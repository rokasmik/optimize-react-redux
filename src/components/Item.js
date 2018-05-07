import React from 'react';
import css from './Item.css';


const Item = ({ name, count, liked, likeItem, addOne }) => {

  const nameClassName = 'itemName' + (liked ? ' liked' : '');

  return (
    <div className="item">
      <div className={nameClassName}>{ name }</div>
      <div className="itemCount">{ count }</div>
      <div className="hideButton" onClick={likeItem}>{'\u2665'}</div>
      <div className="addButton" onClick={addOne}>+</div>
    </div>
  );
};


export default Item;
