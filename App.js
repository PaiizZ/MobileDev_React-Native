import React from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity
} from 'react-native'
import FirstClassScreen from '../MobileApp/screen/FirstClassScreen'
import RegisterScreen from '../MobileApp/screen/RegisterScreen'
import LandingScreen from '../MobileApp/screen/LandingScreen'
import ShowScreen from '../MobileApp/screen/ShowScreen'
import HomeScreen from '../MobileApp/screen/HomeScreen'
import styles from '../MobileApp/style'
export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentScreen: ''
		}
	}

	switchScreen(screen) {
		this.setState({ currentScreen: screen })
	}

	renderScreen() {
		switch (this.state.currentScreen) {
		case 'firstclass':
			return (<FirstClassScreen switchScreen={(screen) => this.switchScreen(screen)}/>)
		case 'register':
			return (<RegisterScreen switchScreen={(screen) => this.switchScreen(screen)}/>)
		case 'landing':
			return (<LandingScreen switchScreen={(screen) => this.switchScreen(screen)}/>)
		case 'show':
			return (<ShowScreen switchScreen={(screen) => this.switchScreen(screen)}/>)
		default:
			return (<HomeScreen switchScreen={(screen) => this.switchScreen(screen)}/>)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderScreen()}
			</View>
		)
	}
}
