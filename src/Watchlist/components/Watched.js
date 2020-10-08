import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../commons/components'
import Movie from './Movie'
import { useSelector } from 'react-redux'

function Watched() {
	const movies = useSelector((state) => state.movies)

	return (
		<View style={styles.container}>
			<Text type="headline" style={{ marginBottom: 8 }}>
				Watched
			</Text>
			{movies.map((movie) => movie.watched && <Movie key={movie.id} watched {...movie}></Movie>)}
		</View>
	)
}

const styles = StyleSheet.create({ container: { marginTop: 16, paddingHorizontal: 24 } })

export default Watched
