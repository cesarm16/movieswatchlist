import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from '../../commons/components'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../state/actions'

function AddMovie({ runAnimation }) {
	const [newMovie, setNewMovie] = useState('')
	const dispatch = useDispatch()

	function addNewMovie() {
		if (runAnimation) runAnimation()
		dispatch(addMovie(newMovie))
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="New movie..."
				style={styles.textinput}
				onChangeText={setNewMovie}></TextInput>
			<Button onPress={addNewMovie}>Add</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { paddingTop: 12, paddingHorizontal: 24, flexDirection: 'row' },
	textinput: { flex: 1, marginRight: 12 }
})

export default AddMovie
