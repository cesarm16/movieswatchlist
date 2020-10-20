import { TOGGLE_WATCHED, ADD_MOVIE, LOOK_FOR_A_POSTER } from '../constants'
import axios from 'axios'

let nextMovieID = 0

export function addMovie(typed) {
	return { type: ADD_MOVIE, id: nextMovieID++, typed }
}

export function toggleWatchedMovie(id) {
	return { type: TOGGLE_WATCHED, id }
}

export function lookAPoster(movie, id) {
	return (dispatch) =>
		axios(
			`https://www.rottentomatoes.com/api/private/v1.0/movies.json?q={${movie}}&page_limit=1&page=1`
		).then((response) => dispatch({ type: LOOK_FOR_A_POSTER, payload: response.data, id }))
}
