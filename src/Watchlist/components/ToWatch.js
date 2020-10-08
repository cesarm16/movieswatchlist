import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../commons/components'
import Movie from './Movie'
import { useSelector } from 'react-redux'

function ToWatch() {
	const movies = useSelector((state) => state.movies)

	return (
		<View style={styles.container}>
			<Text type="headline" style={{ marginBottom: 8 }}>
				To watch
			</Text>
			{movies.map((movie) => !movie.watched && <Movie key={movie.id} {...movie}></Movie>)}
		</View>
	)
}

const styles = StyleSheet.create({ container: { marginTop: 40, paddingHorizontal: 24 } })

export default ToWatch
