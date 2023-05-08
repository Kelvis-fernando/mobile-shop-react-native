import { View, Text } from "react-native";
import { navbar } from "../styles/components/navbar";
import { ButtonIcon, ButtonPlus } from "./Buttons";
import { Icon } from "react-native-elements";
import Colors from "../colors";
import useModal from "../hook/useModal";
import ModalMobile from "./Modal";
import Addtask from "./AddTask";

const Navbar = () => {
  const { isVisible, setIsVisible } = useModal();

  return (
    <>
      <View style={navbar.container}>
        <ButtonIcon>
          <Icon raised name="done" color={Colors.black} />
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            raised
            name="add"
            color={Colors.black}
            onPress={() => setIsVisible(true)}
          />
        </ButtonIcon>
        <ButtonIcon>
          <Icon raised name="edit" color={Colors.black} />
        </ButtonIcon>
      </View>
      <ModalMobile isVisible={isVisible} setIsVisible={setIsVisible}>
        <Addtask />
      </ModalMobile>
    </>
  );
};

export default Navbar;
