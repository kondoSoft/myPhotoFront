import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga'
import 'babel-polyfill'
// Import the root reducer


import rootReducer from './reducers/index'
import mySaga from './sagas/sagas'

import comments from './data/comments'
import posts from './data/posts'


// create an object for the default data
const defaultState = {
  posts,
  comments
}
const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(sagaMiddleware)
)

// TODO: fix enhancers, so it can run both devToolsExtension and Sagas

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot){
  module.hot.accept('./reducers/', ()=>{
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })

}
export default store;
