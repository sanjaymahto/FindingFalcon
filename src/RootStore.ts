import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/index'

const middleware = applyMiddleware(thunk)

/**
 * configuring store to use redux devtools extension
 */
export default function configureStore() {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(middleware)
  return createStore(reducer, {}, enhancer)
}
