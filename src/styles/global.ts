import Colors from "../colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  titlePageContainer: {
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 30,
    zIndex: 9999,
  },
  titlePage: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
});
