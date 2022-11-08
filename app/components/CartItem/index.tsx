import React from 'react';
import { P } from 'app/design/typography';
import { Image, View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { styles } from './styles';
import { TCartItem } from 'app/types';

interface ICartItem {
  item: TCartItem;
}

const CartItem = ({ item }: ICartItem) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.strMealThumb }} style={styles.imgStyle} />
      <View style={styles.badge}>
        <P text={item.quantity} style={{ color: colors.primaryColor }} />
      </View>
    </View>
  );
};

export default CartItem;
