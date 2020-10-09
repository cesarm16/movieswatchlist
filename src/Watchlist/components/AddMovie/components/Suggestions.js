import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../../../commons/components'

function Suggestions({ searchTerm }) {
	useEffect(() => {
		if (searchTerm) {
			console.log('should search')
		} else {
			console.log('clean')
		}
	}, [searchTerm])
	return (
		<View style={styles.container}>
			<Text type="footnote">Type to get suggestions</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { padding: 24, flex: 1 },
	close: { backgroundColor: 'red' }
})

export default Suggestions
