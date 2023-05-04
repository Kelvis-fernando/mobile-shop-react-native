import { Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../colors";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
