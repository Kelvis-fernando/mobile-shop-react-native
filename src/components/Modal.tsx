import { Dispatch, ReactNode, SetStateAction } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import { stylesModal } from "../styles/components/modal";

interface ModalMovileProps {
  isVisible: boolean;
  setIsVisible: SetStateAction<Dispatch<boolean>>;
  children: ReactNode;
}

const ModalMobile = ({
  isVisible,
  setIsVisible,
  children,
}: ModalMovileProps) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={stylesModal.modalBackground}>
        <View style={stylesModal.modalContent}>
          <TouchableOpacity
            style={stylesModal.closeModal}
            onPress={() => setIsVisible(false)}
          >
            <Icon name="close" />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};
export default ModalMobile;
