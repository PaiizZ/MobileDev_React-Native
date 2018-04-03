import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Image
} from "react-native";
import { FormLabel, FromInput } from "react-native-elements";
import styleImage from "../style";
var logo = require("../img/google.png");

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styleImage.viewContainer}>
            <Image source={logo} style={styleImage.logo} />
            {console.log(styleImage.logo)}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center"
    alignItems: "center"
  },
  body: {
    marginTop: Platform.OS === "ios" ? 20 : 0
  }
});

export default RegisterScreen;
