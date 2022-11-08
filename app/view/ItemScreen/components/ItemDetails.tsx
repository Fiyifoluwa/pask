import React from 'react';
import { H } from 'app/design/typography';
import { View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { CaretRight, Clock, Dot, Pizza, Star } from 'app/assets/svg';
import { screenWidth } from 'app/design/responsiveModule';

interface IItemDetails {
  itemName: string;
}

const ItemDetails = ({ itemName }: IItemDetails) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <H
        text={itemName}
        style={{
          color: colors.black,
          marginBottom: 16,
          textAlign: 'center',
          maxWidth: screenWidth - 50,
        }}
      />
      <View style={GlobalStyles.alignItemsRow}>
        <View style={{ marginTop: -12, marginRight: 8 }}>
          <Pizza width={20} height={20} />
        </View>
        <H
          text={'Pizza Italiano'}
          style={{ color: colors.black, marginBottom: 12 }}
        />
      </View>
      <View style={{ ...GlobalStyles.alignItemsRow, marginBottom: 20 }}>
        <View style={GlobalStyles.alignItemsRow}>
          <Clock width={18} height={18} fill={colors.black} />
          <H text={'15 min'} style={{ color: colors.black, marginLeft: 8 }} />
        </View>

        <Dot width={27} height={27} fill={colors.black} />

        <View style={GlobalStyles.alignItemsRow}>
          <View style={{ marginTop: -3, marginRight: 8 }}>
            <Star width={14} height={14} fill={colors.warning} />
          </View>
          <H text={'4.8'} style={{ color: colors.black, marginRight: 8 }} />
        </View>
        <H
          text={'(2.2k reviews)'}
          style={{ color: colors.disabledTextColor }}
        />
        <CaretRight width={18} height={18} fill={colors.disabledTextColor} />
      </View>
    </View>
  );
};

export default ItemDetails;
