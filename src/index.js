import React from 'react'
import { StatusBar } from 'react-native'
import Watchlist from './Watchlist'
import { Provider } from 'react-redux'
import configureStore from './state/store'

const store = configureStore()

function App() {
	return (
		<Provider store={store}>
			<StatusBar barStyle="light-content" />
			<Watchlist></Watchlist>
		</Provider>
	)
}

export default App
