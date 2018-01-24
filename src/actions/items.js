import uuid from 'uuid/v1';

export const ITEMS_ADD_MANY = 'ITEMS_ADD_MANY';
export const ITEM_HIDE = 'ITEM_HIDE';
export const ITEM_COUNT_ADD_ONE = 'ITEM_COUNT_ADD_ONE';

export const addItems = items => ({ type: ITEMS_ADD_MANY, items })
export const hideItem = uid => ({ type: ITEM_HIDE, uid })
export const addOneToCount = uid => ({ type: ITEM_COUNT_ADD_ONE, uid })

export const addItemsWithUids = items => dispatch => {
  const itemsWithUids = items.map(item => ({ ...item, uid: uuid() }))
  dispatch(addItems(itemsWithUids))
}
