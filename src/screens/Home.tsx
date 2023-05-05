import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../styles/global";
import Navbar from "../components/Navbar";
import Task from "../components/Task";

const Home = () => {
  const mock = [
    {
      typesOfTask: "developer",
      title: "Criar componente de serch",
      date: "01/06/2023",
    },
    {
      typesOfTask: "design",
      title: "Criar componente de serch",
      date: "01/06/2023",
    },
    {
      typesOfTask: "daily",
      title: "Criar componente de serch",
      date: "01/06/2023",
    },
    {
      typesOfTask: "daily",
      title: "Criar componente de serch",
      date: "01/06/2023",
    },
    {
      typesOfTask: "developer",
      title: "Criar componente de serch",
      date: "01/06/2023",
    },
    {
      typesOfTask: "developer",
      title: "Criar componente de serch",
      date: "01/06/2023",
    },
  ];
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titlePageContainer}>
        <Text style={globalStyles.titlePage}>Todays Tasks</Text>
      </View>
      <View style={{ height: "80%", marginTop: 90 }}>
        <ScrollView>
          {mock.map((task) => (
            <Task data={task} />
          ))}
        </ScrollView>
      </View>
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
