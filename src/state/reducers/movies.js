function movies(state = [], action) {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: action.id,
					typed: action.typed,
					watched: false
				}
			]
		case 'TOGGLE_MOVIE':
			return state.map((movie) =>
				movie.id === action.id ? { ...movie, watched: !movie.completed } : movie
			)
		default:
			return state
	}
}

export default movies
