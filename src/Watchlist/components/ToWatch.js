import React from 'react'
import { View } from 'react-native'
import { Text } from '../../commons/components'
import Movie from './Movie'

function ToWatch({ movies }) {
	return (
		<View style={{ marginTop: 40, paddingHorizontal: 24 }}>
			<Text type="headline" style={{ marginBottom: 8 }}>
				To watch
			</Text>
			{movies.map((movie) => !movie.watched && <Movie key={movie.typed} {...movie}></Movie>)}
		</View>
	)
}

export default ToWatch
