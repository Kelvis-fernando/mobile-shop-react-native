import { Text, TouchableOpacity } from "react-native";
import { button } from "../styles/components/button";
import { ReactNode } from "react";

interface ButtonProps {
  title?: string;
  children?: ReactNode;
}

export const ButtonPlus = ({ title }: ButtonProps) => {
  return (
    <TouchableOpacity style={button.plus}>
      <Text style={button.plusText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ButtonIcon = ({ children }: ButtonProps) => {
  return <TouchableOpacity>{children}</TouchableOpacity>;
};
