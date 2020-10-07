import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Colors from '../../Colors'

function Input({ style, ...props }) {
	return (
		<View style={[styles.container, style]}>
			<TextInput
				autoCorrect={false}
				style={styles.input}
				placeholderTextColor={Colors.lightgray}
				{...props}
				clearButtonMode="while-editing"></TextInput>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		backgroundColor: Colors.white,
		borderRadius: 6,
		overflow: 'hidden'
	},
	input: {
		height: 44,
		fontSize: 14,
		letterSpacing: 0.2,
		fontFamily: 'Montserrat-Regular'
	}
})

export default Input
