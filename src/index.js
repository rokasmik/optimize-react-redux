import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import itemsApp from './reducers'
import App from './components/App'


const store = createStore(itemsApp, compose(window.devToolsExtension()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
