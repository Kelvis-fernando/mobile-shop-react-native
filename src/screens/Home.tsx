import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../styles/global";
import Navbar from "../components/Navbar";
import Task from "../components/Task";

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titlePageContainer}>
        <Text style={globalStyles.titlePage}>Todays Tasks</Text>
      </View>
      <View style={{ height: "80%", marginTop: 90 }}>
        <ScrollView>
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"design"} />
          <Task typesOfTask={"daily"} />
          <Task typesOfTask={"daily"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
          <Task typesOfTask={"developer"} />
        </ScrollView>
      </View>
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
