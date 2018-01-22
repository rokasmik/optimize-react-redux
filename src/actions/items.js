export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_HIDE = 'ITEM_HIDE';
export const ITEM_ADD_ONE = 'ITEM_ADD_ONE';

export const addItem = item => ({ type: ITEM_ADD, item })
export const hideItem = uid => ({ type: ITEM_HIDE, uid })
export const addOneToCount = uid => ({ type: ITEM_ADD_ONE, uid })
