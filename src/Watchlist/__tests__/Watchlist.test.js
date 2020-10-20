import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import Watchlist from '../index'

import { Provider } from 'react-redux'
import configureStore from '../../state/store'
const store = configureStore()

function testRender(jsx, { store, ...otherOpts }) {
	return render(<Provider store={store}>{jsx}</Provider>, otherOpts)
}

describe('watchlist', () => {
	it('renders correctly', () => {
		const { getByText, getByPlaceholderText } = testRender(<Watchlist></Watchlist>, { store })

		expect(getByText('My movie list')).toBeDefined()
		getByPlaceholderText('New movie...')
		getByText('To watch')
		getByText('Watched')
		cleanup()
	})
})
