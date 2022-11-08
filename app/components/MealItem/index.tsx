import React from 'react';
import { Body, H } from 'app/design/typography';
import { Image, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { TCategoryItem } from 'app/types';
import { styles } from './styles';
import { Bag, Clock } from 'app/assets/svg';

interface IMealItem {
  item: TCategoryItem;
  addItemToCart: () => void;
}

const MealItem = ({ item, addItemToCart }: IMealItem) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <H
          text={item.strMeal}
          style={styles.itemName}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        />
        <View style={{ flexDirection: 'row' }}>
          <H text={'$ '} style={{ color: colors.primaryColor }} />
          <H text={'9.99'} style={{ color: colors.black }} />
        </View>
      </View>

      <Image source={{ uri: item.strMealThumb }} style={styles.img} />
      <View style={styles.moreInfoContainer}>
        <View>
          <Body
            text={'🔥 44 Calories'}
            fontSize={16}
            style={{ marginBottom: 8, color: colors.black }}
          />
          <View style={GlobalStyles.alignItemsRow}>
            <Clock width={14} height={14} fill={colors.disabledTextColor} />
            <Body
              text={'20 min'}
              style={{ color: colors.disabledTextColor, marginLeft: 8 }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.cartIconContainer}
          activeOpacity={0.7}
          onPress={() => {
            addItemToCart();
          }}
        >
          <Bag width={18} height={18} fill={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealItem;
