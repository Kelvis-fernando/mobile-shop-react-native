import Colors from "../../colors";
import { StyleSheet } from "react-native";

export const navbar = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
