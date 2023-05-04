import { Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Colors from "../colors";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <StatusBar style="auto" />
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

export default Home;
