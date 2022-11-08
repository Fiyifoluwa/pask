import { colors } from 'app/design/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    maxHeight: 350,
    maxWidth: 250,
    minWidth: 235,
    backgroundColor: colors.inputBackground,
    padding: 25,
    borderRadius: 28,
    marginRight: 16,
  },
  itemInfo: { alignItems: 'center', marginBottom: 16 },
  img: {
    width: 120,
    height: 120,
    marginBottom: 12,
    borderRadius: 99,
    alignSelf: 'center',
  },
  moreInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartIconContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    width: 40,
    height: 40,
  },
  itemName: { marginBottom: 10, maxWidth: 220, color: colors.black },
});
