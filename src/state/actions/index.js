let nextMovieID = 0

export function addMovie(typed) {
	return { type: 'ADD_MOVIE', id: nextMovieID++, typed }
}

export function toggleMovie(id) {
	return { type: 'TOGGLE_MOVIE', id }
}
