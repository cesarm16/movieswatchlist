import React from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import { Text } from '../commons/components'
import AddMovie from './components/AddMovie'
import ToWatch from './components/ToWatch'
import Watched from './components/Watched'
import Colors from '../commons/Colors'

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
			<ToWatch></ToWatch>
			<Watched></Watched>
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
