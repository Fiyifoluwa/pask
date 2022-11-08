import { colors } from 'app/design/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 18,
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
    // paddingLeft: 25,
  },
});
