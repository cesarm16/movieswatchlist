import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [thunk]
if (__DEV__) middleware.push(createLogger())

export default () => {
	let store = createStore(rootReducer, applyMiddleware(...middleware))
	return store
}
