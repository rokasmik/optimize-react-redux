import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import itemsApp from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'

import { addItemsWithUids } from './actions/items';
import { generateItems } from './utils/items-generator';


const store = createStore(itemsApp, compose(
  applyMiddleware(thunk),
  window.devToolsExtension())
)

const DEFAULT_ITEMS = generateItems(100)
store.dispatch(addItemsWithUids(DEFAULT_ITEMS))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
