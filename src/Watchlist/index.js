import React, { createRef, useState } from 'react'
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
	const [scrollEnable, toggleScroll] = useState(true)
	const transition = (
		<Transition.Together propagation="bottom">
			<Transition.In type="slide-right" durationMs={150}></Transition.In>
			<Transition.Change interpolation="linear" durationMs={150}></Transition.Change>
			<Transition.Out type="slide-right" durationMs={150}></Transition.Out>
		</Transition.Together>
	)

	const ref = createRef()

	function runAnimation() {
		ref.current.animateNextTransition()
	}

	function disableScroll() {
		toggleScroll(false)
	}

	function enableScroll() {
		toggleScroll(true)
	}

	return (
		<Transitioning.View ref={ref} transition={transition} style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollview}
				scrollEnabled={scrollEnable}
				keyboardShouldPersistTaps="handled">
				<ToWatch runAnimation={runAnimation}></ToWatch>
				<Watched runAnimation={runAnimation}></Watched>
				<AddMovie
					runAnimation={runAnimation}
					onBlur={enableScroll}
					onFocus={disableScroll}></AddMovie>
			</ScrollView>
		</Transitioning.View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background
	},
	header: { paddingTop: 8, paddingBottom: 16 },
	scrollview: { paddingBottom: 32, paddingTop: 57, flexGrow: 1 }
})

export default Watchlist
