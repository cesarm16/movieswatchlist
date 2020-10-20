import React, { useState, createRef, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Text } from '../../../commons/components'
import { useDispatch } from 'react-redux'
import { addMovie, lookAPoster } from '../../../state/actions'
import { Transition, Transitioning } from 'react-native-reanimated'
import Colors from '../../../commons/Colors'
import useDebounce from './components/useDebounce'
import Suggestions from './components/Suggestions'

function AddMovie({ runAnimation, onFocus, onBlur }) {
	const [newMovie, setNewMovie] = useState('')
	const [inFocus, setInputOnFocus] = useState(false)

	const dispatch = useDispatch()

	const inputRef = createRef()
	const animationRef = createRef()

	const debounceMovieSearch = useDebounce(newMovie, 500)

	function addNewMovie() {
		inputRef.current.blur()
		const { id } = dispatch(addMovie(newMovie))
		if (runAnimation) runAnimation()
		dispatch(lookAPoster(newMovie, id))
	}

	function inputOnFocus() {
		setInputOnFocus(true)
		animationRef.current.animateNextTransition()
		if (onFocus) onFocus()
	}

	function inputOnBlur() {
		setInputOnFocus(false)
		if (onBlur) onBlur()
	}

	return (
		<Transitioning.View
			ref={animationRef}
			transition={<Transition.In type="fade" durationMs={150}></Transition.In>}
			style={[
				StyleSheet.absoluteFill,
				{
					bottom: inFocus ? 0 : null
				}
			]}>
			{inFocus && (
				<View style={styles.curtain}>
					<Suggestions searchTerm={debounceMovieSearch}></Suggestions>
				</View>
			)}
			<View style={styles.container}>
				<TextInput
					returnKeyType="default"
					ref={inputRef}
					onFocus={inputOnFocus}
					onBlur={inputOnBlur}
					placeholder="New movie..."
					style={styles.textinput}
					onChangeText={setNewMovie}></TextInput>
				<Button onPress={addNewMovie}>Add</Button>
			</View>
		</Transitioning.View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 12,
		paddingHorizontal: 24,
		flexDirection: 'row'
	},
	textinput: { flex: 1, marginRight: 12 },
	curtain: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: Colors.background,
		paddingTop: 57
	}
})

export default AddMovie
