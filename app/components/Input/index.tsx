import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  TextInputProps,
  Text,
} from 'react-native';
import { colors } from 'app/design/GlobalStyles';

interface InputProps {
  height?: number;
  value: string | number | any;
  placeholder: string | number | any;
  placeholderTextColor?: string;
  textInputStyle?: TextStyle;
  containerStyle?: TextStyle;
  props?: TextInputProps;
  onChangeText: (arg: string) => void;
  rightIconPress?: (event: GestureResponderEvent) => void;
  rightIcon?: boolean;
}

const Input: React.FC<InputProps> = ({
  rightIcon,
  value,
  textInputStyle,
  containerStyle,
  placeholder,
  props,
  onChangeText,
  rightIconPress,
}) => {
  const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: colors.white,
      paddingVertical: 8,
      paddingHorizontal: 24,
      height: 55,
      color: colors.black,
      borderWidth: 0.5,
      borderColor: colors.inputBorder,
    },
    textInput: {
      fontFamily: 'U8-Bold',
      color: colors.black,
      width: '100%',
      height: 55,
      // flex: 1,
    },
  });

  return (
    <View>
      <View style={[styles.inputContainer, containerStyle]}>
        <TextInput
          style={[styles.textInput, textInputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.disabledTextColor}
          keyboardAppearance="dark"
          // // @ts-ignore
          // onChangeText={(text: String) => onChange(name)(text)}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity
            style={{ marginLeft: 'auto' }}
            onPress={rightIconPress}
          >
            <Text style={[{ color: colors.disabledTextColor }]}>
              {/* {secureTextEntry ? 'Show' : 'Hide'} */}
            </Text>
          </TouchableOpacity>
        )}
        {/* {rightCaret && <CaretRight />} */}
      </View>
    </View>
  );
};

export default Input;
