import { colors } from 'app/design/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 87,
    height: 105,
    backgroundColor: colors.white,
    marginRight: 14,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 0.5,
  },
  radioButton: {
    width: 14,
    height: 14,
    backgroundColor: colors.white,
    marginBottom: 12,
    borderRadius: 99,
  },
  itemsText: { color: colors.white, opacity: 0.6 },
  hscrollContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    maxWidth: 200,
  },
});
