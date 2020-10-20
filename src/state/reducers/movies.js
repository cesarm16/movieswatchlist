import { TOGGLE_WATCHED, ADD_MOVIE, LOOK_FOR_A_POSTER } from '../constants'

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
		case LOOK_FOR_A_POSTER:
			if (action.payload.movies.length >= 1)
				return state.map((movie) =>
					movie.id === action.id
						? { ...movie, poster: action.payload.movies[0].posters.thumbnail }
						: movie
				)
		default:
			return state
	}
}

export default movies
