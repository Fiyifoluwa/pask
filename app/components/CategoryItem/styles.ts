import { colors } from 'app/design/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 83,
    height: 118,
    marginRight: 14,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 0.5,
  },
  imgStyle: {
    width: 45,
    height: 45,
    backgroundColor: colors.orange,
    marginBottom: 12,
    borderRadius: 16,
  },
});
