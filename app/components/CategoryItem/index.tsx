import React from 'react';
import { View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { Body } from 'app/design/typography';

interface ICategoryItem extends INavigationProps {}

const CategoryItem = ({ navigation }: ICategoryItem) => {
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        width: 83,
        height: 118,
        backgroundColor: colors.primaryColor,
        marginRight: 14,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 24,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: colors.orange,
          borderRadius: 99,
          marginBottom: 10,
        }}
      />
      <Body text={'Fast Food'} fontSize={14} style={{ color: colors.white }} />
    </View>
  );
};

export default CategoryItem;
