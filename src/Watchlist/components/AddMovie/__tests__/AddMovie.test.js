import React from 'react'
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native'

import AddMovie from '../index'

import * as actions from '../../../../state/actions'
import { Provider } from 'react-redux'
import configureStore from '../../../../state/store'

function testRender(jsx, { store, ...otherOpts }) {
	return render(<Provider store={store}>{jsx}</Provider>, otherOpts)
}

describe('AddMovie', () => {
	describe('when adding a movie', () => {
		it('should call add movie action', () => {
			const store = configureStore()

			const { getByText, getByPlaceholderText } = testRender(<AddMovie></AddMovie>, { store })

			const input = getByPlaceholderText('New movie...')
			const button = getByText('Add')

			const movieTyped = 'Spiderman'

			const addMovieActionResponse = { id: 0, typed: movieTyped, type: 'ADD_MOVIE' }

			//mock dispatch
			store.dispatch = jest.fn(() => addMovieActionResponse)

			fireEvent.changeText(input, movieTyped)
			fireEvent.press(button)

			expect(store.dispatch).toHaveBeenCalledWith(addMovieActionResponse)

			cleanup()
		})
		it('look for a poster', async () => {
			const store = configureStore()

			const { getByText, getByPlaceholderText } = testRender(<AddMovie></AddMovie>, { store })

			const input = getByPlaceholderText('New movie...')
			const button = getByText('Add')

			const movieTyped = 'Spiderman'

			jest.mock('../../../../state/actions')
			actions.lookAPoster = jest.fn(() => ({ type: 'LOOK' }))

			fireEvent.changeText(input, movieTyped)
			fireEvent.press(button)

			expect(actions.lookAPoster).toHaveBeenCalled()
			cleanup()
		})
	})
})
