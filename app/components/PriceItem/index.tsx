import React from 'react';
import { View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { Body, H } from 'app/design/typography';
import { styles } from './styles';

interface IPriceItem {
  item: { size: string; price: string };
  selected: boolean;
}

const PriceItem = ({ item, selected }: IPriceItem) => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: !selected ? colors.inputBorder : colors.primaryColor,
      }}
    >
      <View
        style={{
          ...styles.radioButton,
          borderColor: selected ? colors.primaryColor : colors.inputBorder,
          borderWidth: selected ? 5 : 1,
        }}
      />
      <Body
        text={item.size}
        fontSize={13}
        style={{ color: colors.disabledTextColor, marginBottom: 8 }}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      />
      <H
        text={item.price}
        fontSize={18}
        style={{ color: colors.black }}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      />
    </View>
  );
};

export default PriceItem;
