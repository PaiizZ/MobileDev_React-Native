import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Image
} from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import styleImage from "../style";
var logo = require("../img/google.png");

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styleImage.viewContainer}>
            <Image source={logo} style={styleImage.logo} />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  body: {
    marginTop: Platform.OS === "ios" ? 0 : 0
  }
});

export default RegisterScreen;
