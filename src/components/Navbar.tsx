import { View, Button } from "react-native";
import { navbar } from "../styles/components/navbar";
import { ButtonIcon, ButtonPlus } from "./Buttons";
import { Icon } from "react-native-elements";
import Colors from "../colors";

const Navbar = () => {
  return (
    <View style={navbar.container}>
      <ButtonIcon>
        <Icon raised name="done" color={Colors.black} />
      </ButtonIcon>
      <ButtonPlus title="+" />
      <ButtonIcon>
        <Icon raised name="edit" color={Colors.black} />
      </ButtonIcon>
    </View>
  );
};

export default Navbar;
