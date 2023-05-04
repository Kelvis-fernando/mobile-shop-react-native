import Colors from "../../colors";
import { StyleSheet } from "react-native";

export const button = StyleSheet.create({
  plus: {
    backgroundColor: Colors.blue,
    padding: 0,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    cursor: "pointer",
  },
  plusText: {
    fontSize: 45,
    color: Colors.white,
  },
});
