import { TOGGLE_WATCHED, ADD_MOVIE } from '../constants'

let nextMovieID = 0

export function addMovie(typed) {
	return { type: ADD_MOVIE, id: nextMovieID++, typed }
}

export function toggleWatchedMovie(id) {
	return { type: TOGGLE_WATCHED, id }
}
