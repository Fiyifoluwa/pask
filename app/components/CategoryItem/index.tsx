import React from 'react';
import { Image, View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { Body } from 'app/design/typography';

interface ICategoryItem extends INavigationProps {
  item: any;
  selected: boolean;
}

const CategoryItem = ({ item, selected }: ICategoryItem) => {
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        width: 83,
        height: 118,
        backgroundColor: !selected ? 'transparent' : colors.primaryColor,
        marginRight: 14,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 24,
        borderColor: !selected ? colors.inputBorder : colors.white,
        borderWidth: 0.5,
      }}
    >
      <Image
        source={{ uri: item.strCategoryThumb }}
        style={{
          width: 45,
          height: 45,
          backgroundColor: colors.orange,
          marginBottom: 12,
          borderRadius: 12,
        }}
      />
      <Body
        text={item.strCategory}
        fontSize={14}
        style={{ color: !selected ? colors.black : colors.white, maxWidth: 70 }}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      />
    </View>
  );
};

export default CategoryItem;
