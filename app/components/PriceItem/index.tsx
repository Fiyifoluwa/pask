import React from 'react';
import { View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { Body } from 'app/design/typography';

interface IPriceItem extends INavigationProps {
  item: any;
  selected: boolean;
}

const PriceItem = ({ item, selected }: IPriceItem) => {
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        width: 83,
        height: 118,
        backgroundColor: colors.white,
        marginRight: 14,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 24,
        borderColor: !selected ? colors.inputBorder : colors.primaryColor,
        borderWidth: 0.5,
      }}
    >
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: colors.white,
          marginBottom: 12,
          borderRadius: 99,
          borderColor: selected ? colors.primaryColor : colors.inputBorder,
          borderWidth: selected ? 5 : 1,
        }}
      />
      <Body
        text={item.size}
        fontSize={12}
        style={{ color: colors.disabledTextColor }}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      />
      <Body
        text={item.price}
        fontSize={14}
        style={{ color: colors.black }}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      />
    </View>
  );
};

export default PriceItem;
