import React from 'react';
import { Body, H } from 'app/design/typography';
import { Image, View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';

interface IMealItem extends INavigationProps {
  item: any;
}

const MealItem = ({ navigation, item }: IMealItem) => {
  return (
    <View
      style={{
        maxHeight: 350,
        maxWidth: 250,
        minWidth: 235,
        backgroundColor: colors.inputBackground,
        padding: 25,
        borderRadius: 28,
        marginRight: 16,
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <H
          text={item.strMeal}
          style={{ marginBottom: 10, maxWidth: 220 }}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        />
        <View style={{ flexDirection: 'row' }}>
          <H text={'$ '} style={{ color: colors.primaryColor }} />
          <H text={'9.99'} />
        </View>
      </View>

      <Image
        source={{ uri: item.strMealThumb }}
        style={{
          width: 120,
          height: 120,
          marginBottom: 12,
          borderRadius: 99,
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Body
            text={'🔥 44 Calories'}
            fontSize={16}
            style={{ marginBottom: 8 }}
          />
          <Body
            text={'🕥 20 min'}
            style={{ color: colors.disabledTextColor }}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            // padding: 10,
            width: 40,
            height: 40,
          }}
        >
          <Body text={'🛒'} />
        </View>
      </View>
    </View>
  );
};

export default MealItem;
