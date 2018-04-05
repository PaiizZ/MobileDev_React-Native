import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../style'
import { Button } from 'react-native-elements'
var img = require('../img/react-native.jpg')

class LandingScreen extends Component {
	render() {
		return (
			<View style={[styles.container, {backgroundColor: '#1b5e20'}]}>
				<View style={styles.body}>
					<Image
						source={img}
						style={styles.logo}
					/>
					<Text style={{fontSize: 18, textAlign: 'center'}}>Hello I am here</Text>
					<Button style={{ marginTop: 30 }} title="Go to Show Screen" onPress={() => this.props.switchScreen('show')}></Button>
					<Button style={{ marginTop: 30 }} title="Go to Home Screen" onPress={() => this.props.switchScreen('home')}></Button>
				</View>
			</View>
		)
	}
}

export default LandingScreen
