import { combineReducers } from 'redux';
import uuid from 'uuid/v1';
import { generateItems } from '../utils/items-generator';
import {
  ITEM_ADD,
  ITEM_HIDE,
  ITEM_ADD_ONE
} from '../actions/items'


const DEFAULT_ITEMS = generateItems(1000);

const byUid = (state = DEFAULT_ITEMS, action) => {
  switch (action.type) {
    case ITEM_ADD:
      return {
        ...state,
        [uuid()]: action.item
      }

    case ITEM_HIDE:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          hidden: true
        } 
      }

    case ITEM_ADD_ONE:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          count: state[action.uid].count + 1
        }
      }
    
    default: 
      return state
  }
}

export default combineReducers({
  byUid
})
