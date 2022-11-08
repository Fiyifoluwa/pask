import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  whiteBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    top: 110,
  },
  headerView: {
    ...GlobalStyles.wrapper,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealImage: {
    height: 190,
    width: 190,
    marginBottom: 32,
    borderRadius: 99,
    alignSelf: 'center',
  },
  pricesContainer: {
    ...GlobalStyles.alignItemsRow,
    alignSelf: 'center',
    marginBottom: 20,
  },
  dietaryInfo: {
    ...GlobalStyles.wrapper,
    alignSelf: 'center',
    flex: 1,
    marginBottom: 10,
  },
  priceAndQuantity: {
    ...GlobalStyles.alignItemsRow,
    ...GlobalStyles.spaceBetween,
    ...GlobalStyles.wrapper,
    marginBottom: 32,
  },
  quantityIcon: {
    borderColor: colors.disabledTextColor,
    borderWidth: 0.5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnWrapper: { ...GlobalStyles.wrapper, marginBottom: 20 },
});
