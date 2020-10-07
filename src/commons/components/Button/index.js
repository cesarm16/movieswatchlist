import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../Text'
import Colors from '../../Colors'

function Button({ children, style, ...props }) {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.orange,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
		paddingHorizontal: 16
	},
	text: { color: Colors.white, fontWeight: '500', fontSize: 15 }
})

Button.propTypes = {
	children: PropTypes.string
}

export default Button
