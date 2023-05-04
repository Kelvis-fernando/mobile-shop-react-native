import { Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../colors";
import { globalStyles } from "../styles/global";
import Navbar from "../components/Navbar";
import Task from "../components/Task";

const Home = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <Text>Todays Tasks</Text>
      <Task typesOfTask={"developer"} />
      <Task typesOfTask={"design"} />
      <Task typesOfTask={"daily"} />
      <Task typesOfTask={"daily"} />
      <Task typesOfTask={"developer"} />
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
