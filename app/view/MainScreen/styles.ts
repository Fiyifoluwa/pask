import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { screenWidth } from 'app/design/responsiveModule';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainScrollView: { marginBottom: 100 },
  headerView: {
    ...GlobalStyles.wrapper,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nameText: { opacity: 0.5, marginBottom: 12, color: colors.black },
  userImage: {
    borderRadius: 99,
    backgroundColor: colors.primaryColor,
    height: 50,
    width: 50,
    alignSelf: 'flex-start',
  },
  searchContainer: {
    ...GlobalStyles.wrapper,
    marginBottom: 20,
  },
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: screenWidth - 40,
    flex: 1,
  },
  cartBg: { backgroundColor: colors.white, paddingVertical: 8 },
});
