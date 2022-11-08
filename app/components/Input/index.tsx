import React from 'react';
import {
  TextInput,
  View,
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { styles } from './styles';
import { Options, Search } from 'app/assets/svg';

interface InputProps {
  value: string | number | any;
  placeholder: string | number | any;
  textInputStyle?: TextStyle;
  containerStyle?: TextStyle;
  props?: TextInputProps;
  onChangeText: (arg: string) => void;
  rightIconPress?: (event: GestureResponderEvent) => void;
  rightIcon?: boolean;
  leftIcon?: boolean;
}

const Input: React.FC<InputProps> = ({
  rightIcon,
  leftIcon,
  value,
  textInputStyle,
  containerStyle,
  placeholder,
  props,
  onChangeText,
  rightIconPress,
}) => {
  return (
    <View>
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon && (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={rightIconPress}
            activeOpacity={1}
          >
            <Search width={20} height={20} fill={colors.black} />
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.textInput, textInputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.disabledTextColor}
          keyboardAppearance="dark"
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity
            style={{ marginLeft: 'auto' }}
            onPress={rightIconPress}
            activeOpacity={0.7}
          >
            <Options width={25} height={25} fill={colors.black} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
