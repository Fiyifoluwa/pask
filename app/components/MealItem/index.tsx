import React from 'react';
import { Body, H } from 'app/design/typography';
import { View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';

interface IMealItem extends INavigationProps {}

const MealItem = ({ navigation }: IMealItem) => {
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
        <H text={'Melting Cheese Pizza'} style={{ marginBottom: 10 }} />
        <View style={{ flexDirection: 'row' }}>
          <H text={'$ '} style={{ color: colors.primaryColor }} />
          <H text={'9.99'} />
        </View>
      </View>
      <View
        style={{
          width: 120,
          height: 120,
          backgroundColor: colors.orange,
          borderRadius: 99,
          alignSelf: 'center',
          marginBottom: 24,
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
