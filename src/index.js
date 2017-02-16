import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import * as sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

for (var key in sagas) {
  // console.log(sagas[key]);
  // console.log(sagas);
  if (sagas.hasOwnProperty(key) && typeof sagas[key] === 'function') {
    sagaMiddleware.run(sagas[key])
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
