import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import FirstClassScreen from "./screen/FirstClassScreen";
import RegisterScreen from "./screen/RegisterScreen";
import LandingScreen from "./screen/LandingScreen"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2: "Please input a text"
    };
  }

  handleChangeText(text) {
    this.setState({ text1: text });
  }

  setTitle() {
    this.setState({ text2: this.state.text1 });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <FirstClassScreen/> */}
        {/* <RegisterScreen /> */}
        <LandingScreen/>
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
    marginTop: Platform.OS === "ios" ? 25 : 0
  },
  label: {
    color: "#5C5C5C",
    fontSize: 15,
    fontWeight: "bold"
  },
  textBox: {
    flex: 1,
    height: 42,
    borderRadius: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#dfdfdf",
    borderWidth: 1
  },
  textInput: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    height: 35,
    padding: 0
  }
});
