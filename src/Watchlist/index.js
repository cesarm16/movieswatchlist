import React, { createRef } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import { Text } from '../commons/components'
import AddMovie from './components/AddMovie'
import ToWatch from './components/ToWatch'
import Watched from './components/Watched'
import Colors from '../commons/Colors'
import { Transitioning, Transition } from 'react-native-reanimated'

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
	const transition = (
		<Transition.Together>
			<Transition.In type="slide-right" durationMs={150}></Transition.In>
			<Transition.Change interpolation="linear" propagation={'bottom'}></Transition.Change>
			<Transition.Out type="slide-right" durationMs={150}></Transition.Out>
		</Transition.Together>
	)

	const ref = createRef()

	function runAnimation() {
		ref.current.animateNextTransition()
	}

	return (
		<Transitioning.View ref={ref} transition={transition}>
			<ScrollView>
				<AddMovie runAnimation={runAnimation}></AddMovie>
				<ToWatch runAnimation={runAnimation}></ToWatch>
				<Watched runAnimation={runAnimation}></Watched>
			</ScrollView>
		</Transitioning.View>
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
