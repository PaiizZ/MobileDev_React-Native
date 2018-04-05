import React, { Component } from "react";
import { StyleSheet, Platform, Text, View, Image } from "react-native";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../style';
import { Button } from "react-native-elements";
var img = require("../img/Yipso.jpg");

class ShowScreen extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#1b5e20'}]}>
        <View style={styles.body}>
          <Image
            source={img}
            style={styles.logo}
          />
          <Text style={{fontSize: 18, textAlign: 'center'}}>Hello I am here</Text>
          <Button style={{ marginTop: 30 }} title="Back to Landing Screen" onPress={() => this.props.switchScreen('landing')}></Button>
          <Button style={{ marginTop: 30 }} title="Go to Home Screen" onPress={() => this.props.switchScreen('home')}></Button>
        </View>
      </View>
    );
  }
}

export default ShowScreen;
