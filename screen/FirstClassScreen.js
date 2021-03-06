import React, { Component } from 'react'
import { Platform, StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
var logo = require('../img/react-native.jpg')

export default class FirstClassScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text1: '',
			text2: 'Please input a text'
		}
	}

	handleChangeText(text) {
		this.setState({ text1: text })
	}

	setTitle() {
		this.setState({ text2: this.state.text1 })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image
							style={{ width: 300, height: 180, resizeMode: 'cover' }}
							source={logo}
						/>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 15
						}}
					>
						<Text style={styles.label}>{this.state.text2}</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<View style={styles.textBox}>
							<TextInput
								style={styles.textInput}
								value={this.state.text1}
								underlineColorAndroid="transparent"
								onChangeText={text => this.handleChangeText(text)}
							/>
						</View>
						<TouchableOpacity
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								marginRight: 15
							}}
							onPress={() => this.setTitle()}
						>
							<Text style={styles.label}>Save</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 15
						}}
					>
						<Text style={styles.label}>{this.state.text1}</Text>
					</View>
					<Button style={{ marginTop: 30 }} title="Go to Home Screen" onPress={() => this.props.switchScreen('home')}></Button>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	body: {
		marginTop: Platform.OS === 'ios' ? 25 : 0
	},
	label: {
		color: '#5C5C5C',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textBox: {
		flex: 1,
		height: 42,
		borderRadius: 3,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		paddingHorizontal: 15,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
		marginBottom: 10,
		borderColor: '#dfdfdf',
		borderWidth: 1
	},
	textInput: {
		flex: 1,
		color: '#000',
		fontSize: 15,
		height: 35,
		padding: 0
	}
})
