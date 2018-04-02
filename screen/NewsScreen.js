import React, { Component } from "react";
import { StyleSheet, Platform, Text, View } from "react-native";

class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text> This is News Screen</Text>
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
    marginTop: Platform.OS === "ios" ? 25 : 0
  }
});

export default NewsScreen;
