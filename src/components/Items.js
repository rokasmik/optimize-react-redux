import React from 'react';
import Item from '../components/item';
import css from './ItemsList.css';


const ItemsList = props => {

  return (
    <div>
      <h2>Items</h2>
      <div className={'listContainer'}>
        { props.items.map(item => (
          <Item
            {...item}
            key={item.uid}
            addOne={() => props.addOneToCount(item.uid)}
            likeItem={() => props.likeItem(item.uid)}
            />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
