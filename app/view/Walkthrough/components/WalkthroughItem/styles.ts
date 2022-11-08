import { colors } from 'app/design/GlobalStyles';
import { screenWidth } from 'app/design/responsiveModule';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primaryButtontext,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
  },
});
