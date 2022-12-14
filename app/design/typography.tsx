import React, { ReactNode } from 'react';
import {
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  Text,
  View,
} from 'react-native';

interface ITypography extends TextProps {
  text: string | null | ReactNode;
  fontSize?: number;
  style?: StyleProp<TextStyle>;
  fontWeight?: string;
  lineHeight?: number;
  animationDuration?: number;
  textAlign?: 'center' | 'auto' | 'justify' | 'left' | 'right';
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'U8-Bold',
  },
  body: {
    fontFamily: 'U8-Bold',
  },
  paragraph: {
    fontFamily: 'U8-Bold',
  },
});

export const H = ({
  fontSize = 18,
  text,
  style = {},
  lineHeight,
  textAlign,
  fontWeight,
  ...rest
}: ITypography) => {
  return (
    <View>
      <Text
        style={[
          styles.text,
          {
            fontSize,
            lineHeight,
            textAlign,
            fontWeight,
            ...style,
          },
        ]}
        {...rest}
      >
        {text}
      </Text>
    </View>
  );
};

export const P = ({
  fontSize = 13,
  text,
  style,
  fontWeight = '400',
  lineHeight,
  textAlign,
  ...rest
}: ITypography) => {
  return (
    <View>
      <Text
        style={[
          styles.paragraph,
          {
            fontSize,
            lineHeight,
            textAlign,
            fontWeight,
            ...style,
          },
        ]}
        {...rest}
      >
        {text}
      </Text>
    </View>
  );
};

export const Body = ({
  fontSize = 13,
  text,
  style,
  lineHeight,
  fontWeight,
  textAlign,
  ...rest
}: ITypography) => {
  return (
    <View>
      <Text
        style={[
          styles.body,
          {
            fontSize,
            lineHeight,
            fontWeight,
            textAlign,
            ...style,
          },
        ]}
        {...rest}
      >
        {text}
      </Text>
    </View>
  );
};
