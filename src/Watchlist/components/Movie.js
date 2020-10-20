import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from '../../commons/components'
import Colors from '../../commons/Colors'
import { toggleWatchedMovie } from '../../state/actions'
import { useDispatch } from 'react-redux'

const CHECK_ICON = require('../../../assets/images/check.png')

function Movie({ typed, poster, watched, id, runAnimation }) {
	const dispatch = useDispatch()

	function toggle() {
		dispatch(toggleWatchedMovie(id))
		if (runAnimation) runAnimation()
	}

	return (
		<View style={[styles.container, watched ? styles.watched : styles.towatch]}>
			<CheckBox watched={watched} onPress={toggle}></CheckBox>
			<Text style={[styles.text, watched ? styles.watchedtext : null]}>{typed}</Text>
			{poster && <Image source={{ uri: poster }} style={styles.image}></Image>}
		</View>
	)
}

function CheckBox({ watched, onPress }) {
	return (
		<TouchableOpacity
			style={[styles.checkbox, watched ? styles.watchedcheckbox : null]}
			onPress={onPress}>
			{watched && <Image source={CHECK_ICON} style={styles.checkicon}></Image>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		padding: 14,
		borderRadius: 7,
		flexDirection: 'row',
		alignItems: 'center'
	},
	towatch: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		backgroundColor: Colors.gray
	},
	watched: { backgroundColor: Colors.black },
	text: { color: Colors.white, marginLeft: 14 },
	checkbox: { width: 28, height: 28, backgroundColor: Colors.white, borderRadius: 6 },
	image: { height: 41, width: 27, position: 'absolute', right: 14, borderRadius: 3 },
	watchedcheckbox: {
		backgroundColor: Colors.orange,
		justifyContent: 'center',
		alignItems: 'center'
	},
	checkicon: { height: 15, width: 15, tintColor: Colors.white },
	watchedtext: { fontWeight: '500', textDecorationLine: 'line-through' }
})
export default Movie
