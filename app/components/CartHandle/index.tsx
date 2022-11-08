import { colors } from 'app/design/GlobalStyles';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface ICartHandle {}

const CartHandle = ({}: ICartHandle) => {
  return (
    <View style={styles.handle}>
      <View
        style={{
          backgroundColor: colors.inputBorder,
          borderRadius: 5,
          width: 40,
          height: 2.5,
          position: 'absolute',
          right: 19,
          bottom: 8,
        }}
      />
    </View>
  );
};

export default CartHandle;
