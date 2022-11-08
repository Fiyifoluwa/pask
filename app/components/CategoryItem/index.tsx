import React from 'react';
import { Image, View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { Body } from 'app/design/typography';
import { styles } from './styles';
import { TCategory } from 'app/types';

interface ICategoryItem {
  item: TCategory;
  selected: boolean;
}

const CategoryItem = ({ item, selected }: ICategoryItem) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: !selected ? 'transparent' : colors.primaryColor,
        borderColor: !selected ? colors.inputBorder : colors.white,
      }}
    >
      <Image source={{ uri: item.strCategoryThumb }} style={styles.imgStyle} />
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
