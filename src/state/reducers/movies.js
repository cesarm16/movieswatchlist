import { TOGGLE_WATCHED, ADD_MOVIE } from '../constants'

function movies(state = [], action) {
	switch (action.type) {
		case ADD_MOVIE:
			return [
				{
					id: action.id,
					typed: action.typed,
					watched: false
				},
				...state
			]
		case TOGGLE_WATCHED:
			return state.map((movie) =>
				movie.id === action.id ? { ...movie, watched: !movie.watched } : movie
			)
		default:
			return state
	}
}

export default movies
