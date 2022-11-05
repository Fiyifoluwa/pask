import { StyleSheet, ViewStyle } from 'react-native';
import { getHeight, getWidth } from './responsiveModule';

interface IBorderStyle {
  borderStyle: ViewStyle['borderStyle'];
  borderWidth: number;
  borderColor: string;
}

export const border = (
  width: number = 1,
  style: ViewStyle['borderStyle'] = 'solid',
  color: string = '#000000',
): IBorderStyle => {
  return {
    borderStyle: style,
    borderWidth: width,
    borderColor: color,
  };
};

interface IShadowStyle {
  shadowRadius: number;
  shadowColor: string;
  shadowOpacity: number;
  shadowOffset: {
    height: number;
    width: number;
  };
}

export const shadow = (
  width = 2.5,
  height = 5,
  radius = 5,
  color = '#000000',
  opacity = 0.2,
): IShadowStyle => {
  return {
    shadowRadius: radius,
    shadowColor: color,
    shadowOffset: { height, width },
    shadowOpacity: opacity,
  };
};

export const colors = {
  primaryColor: '#539F82',
  blue: '#0860D5',
  secondaryColor: '#ECFEF3',
  darkPrimaryColor: '#1A1C1F',
  darkSecondaryColor: '#EBEDEF',
  primaryTextColor: '#1A1C1F',
  secondaryTextColor: '#6C7884',
  darkPrimaryTextColor: '#50555E',
  tertiaryTextColor: '#A2ADC3',
  disabledTextColor: '#8C96A1',
  primaryButtontext: '#ffffff',
  white: '#FFFFFF',
  modalBackground: 'rgba(0,0,0,0.9)',
  inputBackground: 'rgba(247,247,247,1)',
  avatarBG: '#F0E9E9',
  inputBorder: '#DDE1E9',
  inputDisabled: '#F6F7F9',
  tabBackground: '#F6F7F9',
  error: '#DB4343',
  success: '#30CD7C',
  warning: '#F38B00',
  info: '#8B5C5D',
  black: 'rgba(0,0,0,1)',
  green: '#539F82',
  red: '#DB4343',
  orange: '#FFEED9',
  borderColor: '#DCDCDC',
  grey: '#F9FAFA',
};

export default StyleSheet.create({
  contain: {
    flex: 1,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  borderRadius: {
    borderRadius: 8,
  },
  body: {
    paddingHorizontal: getWidth(20),
  },
  verticalMargin: {
    marginVertical: getHeight(25),
  },
  verticalPadding: {
    paddingVertical: getHeight(20),
  },
  horizontalMargin: {
    marginHorizontal: getWidth(20),
  },
  horizontalPadding: {
    paddingHorizontal: getWidth(20),
  },
  marginSpacing: {
    marginHorizontal: getWidth(20),
    marginVertical: getHeight(20),
  },
  paddingSpacing: {
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(20),
  },
  colCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSpacing: {
    marginTop: getHeight(20),
  },
  bottomSpacing: {
    marginBottom: getHeight(20),
  },
  topRow: {
    flexDirection: 'row',
    marginTop: getHeight(15),
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  alignItemsRow: { flexDirection: 'row', alignItems: 'center' },
  alignItemsCol: { flexDirection: 'column', alignItems: 'center' },
  row: {
    flexDirection: 'row',
  },
  mb5: { marginBottom: 5 },
  mb12: { marginBottom: 12 },
  mb17: { marginBottom: 17 },
  mb25: { marginBottom: 25 },
  mb28: { marginBottom: 28 },
  mb36: { marginBottom: 36 },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 2,
  },
});
