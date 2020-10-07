import React from 'react'
import { View } from 'react-native'
import { Text } from '../../commons/components'
import Movie from './Movie'

function Watched({ movies }) {
	return (
		<View style={{ marginTop: 16, paddingHorizontal: 24 }}>
			<Text type="headline" style={{ marginBottom: 8 }}>
				Watched
			</Text>
			{movies.map((movie) => movie.watched && <Movie key={movie.typed} watched {...movie}></Movie>)}
		</View>
	)
}

export default Watched
