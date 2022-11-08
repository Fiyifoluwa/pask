import { colors } from 'app/design/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 99,
    alignSelf: 'center',
    marginLeft: 10,
    position: 'relative',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  badge: {
    minWidth: 20,
    minHeight: 20,
    borderRadius: 99,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: colors.inputBorder,
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});
