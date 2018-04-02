import React, { Component } from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
import Swiper from "react-native-swiper";

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Swiper>
            <View style={styles.slide1}>
              <Text style={styles.text}>This is the first view.</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>This is the second view.</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>This is the third view.</Text>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    marginTop: Platform.OS === "ios" ? 20 : 0
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "normal",
    margin: 20
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01579b"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff4d40"
  }
});

export default WelcomeScreen;
