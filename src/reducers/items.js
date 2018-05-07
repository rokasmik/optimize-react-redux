import { combineReducers } from 'redux';
import uuid from 'uuid/v1';
import { generateItems } from '../utils/items-generator';
import {
  ITEMS_ADD_MANY,
  ITEM_LIKE,
  ITEM_COUNT_ADD_ONE
} from '../actions/items';


const byUid = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_ADD_MANY:
      return action.items.reduce((acc, item) => ({
        ...acc,
        [item.uid]: item
      }), state);

    case ITEM_LIKE:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          liked: true
        }
      };

    case ITEM_COUNT_ADD_ONE:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          count: state[action.uid].count + 1
        }
      };

    default:
      return state;
  }
};

const uids = (state = [], action) => {
  switch (action.type) {
    case ITEMS_ADD_MANY:
      return [...state, ...action.items.map(item => item.uid)];

    default:
      return state;
  }
};


export default combineReducers({
  byUid,
  uids
});
