import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../colors";
import { task } from "../styles/components/task";

interface TaskProps {
  typesOfTask: "developer" | "design" | "daily";
}

const Task = ({ typesOfTask = "developer" }: TaskProps) => {
  const validateTypesOfTask = () => {
    switch (typesOfTask) {
      case "developer":
        return <Icon raised reverse name="code" color={Colors.orange} />;
      case "design":
        return <Icon raised reverse name="movie_edit" color={Colors.orange} />;
      case "daily":
        return <Icon raised reverse name="event" color={Colors.orange} />;
    }
  };

  return (
    <View style={task.container}>
      {validateTypesOfTask()}
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Criar componente de serch
        </Text>
        <Text style={{ fontSize: 14 }}>data</Text>
      </View>
      <Icon name="chevron-right" color={Colors.black} />
    </View>
  );
};

export default Task;
