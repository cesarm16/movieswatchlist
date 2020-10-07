import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from '../../commons/components'
import { useDispatch, useSelector } from 'react-redux'

function AddMovie() {
	const dispatch = useDispatch()

	function dispatchtest() {
		dispatch({ type: 'TEST' })
	}

	return (
		<View style={styles.container}>
			<TextInput placeholder="New movie..." style={styles.textinput}></TextInput>
			<Button onPress={dispatchtest}>Add</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { paddingTop: 12, paddingHorizontal: 24, flexDirection: 'row' },
	textinput: { flex: 1, marginRight: 12 }
})

export default AddMovie
