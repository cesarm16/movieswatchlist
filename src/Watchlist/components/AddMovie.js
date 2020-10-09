import React, { useState, createRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from '../../commons/components'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../state/actions'
import { Transition, Transitioning } from 'react-native-reanimated'
import Colors from '../../commons/Colors'

function AddMovie({ runAnimation, onFocus, onBlur }) {
	const [newMovie, setNewMovie] = useState('')
	const [inFocus, setInputOnFocus] = useState(false)
	const dispatch = useDispatch()
	const inputRef = createRef()
	const animationRef = createRef()
	const transition = <Transition.In type="fade"></Transition.In>

	function addNewMovie() {
		inputRef.current.blur()
		dispatch(addMovie(newMovie))
		if (runAnimation) runAnimation()
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
			transition={transition}
			style={[
				StyleSheet.absoluteFill,
				{
					bottom: inFocus ? 0 : null
				}
			]}>
			{inFocus && <View style={styles.curtain}></View>}
			<View style={styles.container}>
				<TextInput
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
	curtain: { ...StyleSheet.absoluteFillObject, backgroundColor: Colors.background }
})

export default AddMovie
