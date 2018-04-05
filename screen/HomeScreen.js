import React, {Component} from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../style'
export default class HomeScreen extends Component {
	render() {
		return (
			<View style={[styles.container, {justifyContent: 'center'}]}>
				<Button title="Go to FirstClass Screen" onPress={() => this.props.switchScreen('firstclass')}></Button>
				<Button style={{ marginTop: 30 }} title="Go to Register Screen" onPress={() => this.props.switchScreen('register')}></Button>
				<Button style={{ marginTop: 30 }} title="Go to Landing Screen" onPress={() => this.props.switchScreen('landing')}></Button>
			</View>
		)
	}
}
