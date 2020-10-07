import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from '../../commons/components'

function AddMovie() {
	return (
		<View style={styles.container}>
			<TextInput placeholder="New movie..." style={styles.textinput}></TextInput>
			<Button>Add</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { paddingTop: 12, paddingHorizontal: 24, flexDirection: 'row' },
	textinput: { flex: 1, marginRight: 12 }
})

export default AddMovie
