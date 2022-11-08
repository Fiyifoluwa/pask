import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Body } from 'app/design/typography';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';

interface IGenericButtonProps extends TouchableOpacityProps {
  buttonText?: string;
  variant?: 'primary' | 'outline';
  textStyle?: any;
  buttonStyle?: any;
  textColor?: string;
  children?: any;
}

export const BUTTON_HEIGHT = 55;

const styles = StyleSheet.create({
  wrapper: {
    height: BUTTON_HEIGHT,
    borderRadius: 8,
    flexDirection: 'row',
    ...GlobalStyles.fillCenter,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

const PrimaryButton = ({
  buttonText,
  onPress,
  buttonStyle,
  textStyle,
  textColor,
  children,
  disabled,
  ...rest
}: IGenericButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          backgroundColor: colors.primaryColor,
          opacity: disabled ? 0.7 : 1,
          ...buttonStyle,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <View style={GlobalStyles.alignItemsRow}>
          <Body
            fontSize={14}
            text={buttonText}
            style={{ color: textColor, ...textStyle }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const OutlineButton = ({
  buttonText,
  onPress,
  buttonStyle,
  textStyle,
  textColor,
  children,
  disabled,
  ...rest
}: IGenericButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          backgroundColor: 'transparent',
          borderColor: disabled ? colors.inputBorder : colors.white,
          borderWidth: 0.5,
          opacity: disabled ? 0.5 : 1,
          ...buttonStyle,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <View style={GlobalStyles.alignItemsRow}>
          <Body
            fontSize={14}
            text={buttonText}
            style={{ color: textColor, ...textStyle }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const GenericButton = (props: IGenericButtonProps) => {
  return props.variant === 'primary' ? (
    <PrimaryButton {...props} />
  ) : (
    <OutlineButton {...props} />
  );
};

export default GenericButton;
