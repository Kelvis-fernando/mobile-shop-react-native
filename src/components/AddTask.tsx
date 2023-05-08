import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Picker from "react-native-picker";
import Colors from "../colors";

const Addtask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("developer");
  const [author, setAuthor] = useState("");

  const handleCreateTask = () => {
    // Lógica para criar a tarefa com os dados preenchidos
    console.log("Criar tarefa:", taskName, taskType, author);
  };

  return (
    <View style={{ justifyContent: "center", width: "100%" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
        Add New Task
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "semibold", marginTop: 10 }}>
        Nome da Tarefa
      </Text>
      <TextInput
        value={taskName}
        onChangeText={setTaskName}
        placeholder="Digite o nome da tarefa"
        style={{
          borderColor: Colors.black,
          borderStyle: "solid",
          borderWidth: 1,
          fontSize: 16,
          padding: 5,
          borderRadius: 5,
          width: "100%",
          marginTop: 5,
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "semibold", marginTop: 10 }}>
        Autor
      </Text>
      <TextInput
        style={{
          borderColor: Colors.black,
          borderStyle: "solid",
          borderWidth: 1,
          fontSize: 16,
          padding: 5,
          borderRadius: 5,
          width: "100%",
          marginTop: 5,
        }}
        value={author}
        onChangeText={setAuthor}
        placeholder="Digite o nome do autor"
      />

      <Text style={{ fontSize: 20, fontWeight: "semibold", marginTop: 10 }}>
        Tipo de Tarefa
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => setTaskType("developer")}
          style={{
            padding: 10,
            backgroundColor: Colors.main,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: Colors.black, fontWeight: "bold" }}>
            Developer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTaskType("design")}
          style={{
            padding: 10,
            backgroundColor: Colors.main,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: Colors.black, fontWeight: "bold" }}>
            Design
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTaskType("daily")}
          style={{
            padding: 10,
            backgroundColor: Colors.main,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: Colors.black, fontWeight: "bold" }}>Daily</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: Colors.blue, padding: 10, marginTop: 10 }}
        onPress={handleCreateTask}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Criar Tarefa
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addtask;
