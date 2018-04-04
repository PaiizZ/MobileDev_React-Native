import { StyleSheet, Platform, Dimensions } from "react-native";
const window = Dimensions.get("window");

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 5;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  body: {
    marginTop: Platform.OS === "ios" ? 0 : 0
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30
  },
  viewContainer: {
    margin: 10
  }
});
