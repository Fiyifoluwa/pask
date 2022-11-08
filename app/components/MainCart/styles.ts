import { colors } from 'app/design/GlobalStyles';
import { screenWidth } from 'app/design/responsiveModule';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    borderRadius: 24,
    width: screenWidth - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    position: 'relative',
  },
  cartText: { color: colors.white, marginBottom: 10 },
  itemsText: { color: colors.white, opacity: 0.6 },
  hscrollContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    maxWidth: 200,
  },
  clearCartBtn: { marginLeft: 15, alignItems: 'center' },
  clearCartText: { color: colors.white, opacity: 0.6, marginLeft: 10 },
});
