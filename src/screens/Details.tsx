import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../colors";

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Details;
