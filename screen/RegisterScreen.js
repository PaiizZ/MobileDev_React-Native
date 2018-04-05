import React, { Component } from "react";
import { View, Image, Animated, Keyboard, KeyboardAvoidingView } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../style';
var logo = require("../img/react-native.jpg");

class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={styles.body}>
            <View style={styles.viewContainer}>
              <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
            </View>
            <View>
              <FormLabel> Enter Email</FormLabel>
              <FormInput placeholder="Type your email." keyboardType="default" />
            </View>
            <View style={{ marginTop: 15 }}>
              <FormLabel> Enter Password</FormLabel>
              <FormInput
                secureTextEntry={true}
                placeholder="Type your password."
                keyboardType="default"
              />
            </View>
            <View style={{ marginTop: 50 }}>
              <Button title="Register" backgroundColor="blue" />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Button style={{ marginTop: 30 }} title="Go to Home Screen" onPress={() => this.props.switchScreen('home')}></Button>
      </View>
    );
  }
}

export default RegisterScreen;
