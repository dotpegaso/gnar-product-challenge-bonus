import { createBrowserHistory } from 'history'
import { persistStore, persistReducer } from 'redux-persist'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

// sagas
import header from './reducers/sagas/header'
import list from './reducers/sagas/list'

// all reducers
import * as reducers from './reducers/_index'

const persistConfig = {
  key: 'root',
  storage
}

const history = createBrowserHistory({ basename: '/' })
const reducer = persistReducer(
  persistConfig,
  combineReducers({ ...reducers, router: connectRouter(history) })
)

// Middleware's
const SagaMiddleware = createSagaMiddleware()
const RouterMiddleware = routerMiddleware(history)

const store = createStore(
  connectRouter(history)(reducer),
  compose(applyMiddleware(RouterMiddleware, SagaMiddleware))
)

const persistor = persistStore(store)

// Run sagas
SagaMiddleware.run(header)
SagaMiddleware.run(list)

export { store, persistor, history }
