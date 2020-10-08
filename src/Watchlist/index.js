import React from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import { Text } from '../commons/components'
import AddMovie from './components/AddMovie'
import ToWatch from './components/ToWatch'
import Watched from './components/Watched'
import Colors from '../commons/Colors'

const MOVIES = [
	{
		typed: 'Spiderman',
		result: {
			posters: {
				thumbnail:
					'https://resizing.flixster.com/1qMuqJWafLi8ujQEe_KPvT_wuzI=/54x81/v1.bTsxMTE2NzQwNjtqOzE4NjUwOzIwNDg7ODAwOzEyMDA',
				profile:
					'https://resizing.flixster.com/aC6DYksWCinPUh50p8nde8lD9i8=/120x180/v1.bTsxMTE2NzQwNjtqOzE4NjUwOzIwNDg7ODAwOzEyMDA',
				detailed:
					'https://resizing.flixster.com/f-1X61zEhG1nOGCBgVWT0T6b-b0=/180x270/v1.bTsxMTE2NzQwNjtqOzE4NjUwOzIwNDg7ODAwOzEyMDA',
				original:
					'https://resizing.flixster.com/HfWEO5DyOjA-gfzdB7_e_BBflJ8=/800x1200/v1.bTsxMTE2NzQwNjtqOzE4NjUwOzIwNDg7ODAwOzEyMDA'
			}
		},
		watched: false
	},
	{ typed: 'Mandy', result: null, watched: false },
	{ typed: 'Lost highway', watched: true },
	{ typed: 'Incendies', watched: true },
	{ typed: 'Climax', watched: true }
]

function Watchlist() {
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={styles.header}>
					<Text style={{ textAlign: 'center' }} type="header">
						My movie list
					</Text>
				</View>
			</SafeAreaView>
			<Content></Content>
		</View>
	)
}

function Content() {
	return (
		<ScrollView>
			<AddMovie></AddMovie>
			<ToWatch movies={MOVIES}></ToWatch>
			<Watched movies={MOVIES}></Watched>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background
	},
	header: { paddingTop: 8, paddingBottom: 16 }
})

export default Watchlist
