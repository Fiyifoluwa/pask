import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { screenHeight } from 'app/design/responsiveModule';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    ...GlobalStyles.fillCenter,
    ...GlobalStyles.horizontalPadding,
  },
  slider: {
    // flex: 1,
    height: 0.45 * screenHeight,
    backgroundColor: colors.darkPrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    height: 10,
    flexDirection: 'row',
    // ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...GlobalStyles.horizontalPadding,
  },
  button: {
    flex: 0.48,
    borderBottomLeftRadius: 3,
  },
});
