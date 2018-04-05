import React, {Component} from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import FirstClassScreen from "../screen/FirstClassScreen";
import RegisterScreen from "../screen/RegisterScreen";
import LandingScreen from "../screen/LandingScreen";
import ShowScreen from "../screen/ShowScreen"
import { Button } from "react-native-elements";
import styles from '../style';
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <Button title="Go to FirstClass Screen" onPress={() => this.props.switchScreen('firstclass')}></Button>
        <Button style={{ marginTop: 30 }} title="Go to Register Screen" onPress={() => this.props.switchScreen('register')}></Button>
        <Button style={{ marginTop: 30 }} title="Go to Landing Screen" onPress={() => this.props.switchScreen('landing')}></Button>
      </View>
    );
  }
}
