import React, { useState } from 'react';
import { Buttons, Container, PriceItem } from 'app/components';
import { H, P } from 'app/design/typography';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';

interface IItemScreen extends INavigationProps {}

const priceItems = [
  {
    size: 'Small 8"',
    price: '$9.99',
  },
  {
    size: 'Medium 12"',
    price: '$12.99',
  },
  {
    size: 'Large 18"',
    price: '$16.99',
  },
];

const ItemScreen = ({ navigation, route }: IItemScreen) => {
  const { item } = route?.params;
  const [selected, setSelected] = useState(priceItems[1].size);

  return (
    <Container
      statusBarColor={colors.primaryColor}
      backgroundColor={colors.primaryColor}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: colors.white,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          top: 110,
        }}
      />

      <View
        style={{
          ...GlobalStyles.wrapper,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <H text={'🔙'} style={{ color: colors.white }} />
        </TouchableOpacity>
        <H text={'❤️'} style={{ color: colors.white }} />
      </View>

      <Image
        source={{ uri: item.strMealThumb }}
        style={{
          height: 190,
          width: 190,
          marginBottom: 32,
          borderRadius: 99,
          alignSelf: 'center',
        }}
      />

      <View style={{ alignItems: 'center' }}>
        <H
          text={item.strMeal}
          style={{ color: colors.black, marginBottom: 16 }}
        />
        <H
          text={'🍕 Pizza Italiano'}
          style={{ color: colors.black, marginBottom: 12 }}
        />
        <View style={{ ...GlobalStyles.alignItemsRow, marginBottom: 20 }}>
          <H text={'🕥 15 min'} style={{ color: colors.black }} />
          <H
            text={'●'}
            style={{ color: colors.black, opacity: 0.5, marginBottom: -5 }}
            fontSize={12}
          />
          <H text={'⭐️ 4.8 '} style={{ color: colors.black }} />
          <H
            text={'(2.2k reviews)'}
            style={{ color: colors.disabledTextColor }}
          />
          <H
            text={' ›'}
            fontSize={28}
            style={{ color: colors.disabledTextColor }}
          />
        </View>
      </View>

      <View
        style={{
          ...GlobalStyles.alignItemsRow,
          alignSelf: 'center',
          marginBottom: 20,
        }}
      >
        {priceItems.map(value => (
          <TouchableOpacity
            key={value.size}
            onPress={() => {
              setSelected(value.size);
            }}
            activeOpacity={0.8}
          >
            <PriceItem item={value} selected={selected === value.size} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ ...GlobalStyles.wrapper, alignSelf: 'center', flex: 1 }}>
        <P
          text={
            'hgjdvfg kdvkshg vdkshjgd avkdg avdkhagsd vsadghsk dvsgdc sdsds ds dsgdkvsyudvskd sdsudjvls hjgdgvsldhjsvd sdskudvksd hjsd sdf def fd fd f df dfjkgh dvfydgfbdfs fdhjfshjfbs fdfdfgblhfbs...More'
          }
          fontSize={16}
          lineHeight={28}
          textAlign={'center'}
        />
      </View>

      <View
        style={{
          ...GlobalStyles.alignItemsRow,
          ...GlobalStyles.spaceBetween,
          ...GlobalStyles.wrapper,
          marginBottom: 32,
        }}
      >
        <View style={{ ...GlobalStyles.alignItemsRow }}>
          <H text={'Total:'} style={{ color: colors.black }} />
          <H text={' $'} style={{ color: colors.primaryColor }} />
          <H text={'12.99'} style={{ color: colors.black }} />
        </View>

        <View style={{ ...GlobalStyles.alignItemsRow }}>
          <View
            style={{
              borderColor: colors.disabledTextColor,
              borderWidth: 0.5,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <H text={'+'} style={{ color: colors.disabledTextColor }} />
          </View>
          <H text={'    1    '} style={{ color: colors.black }} />
          <View
            style={{
              borderColor: colors.disabledTextColor,
              borderWidth: 0.5,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <H text={'-'} style={{ color: colors.disabledTextColor }} />
          </View>
        </View>
      </View>

      <View style={{ ...GlobalStyles.wrapper, marginBottom: 20 }}>
        <Buttons buttonText="Next" variant="primary" textColor={colors.white} />
      </View>
    </Container>
  );
};

export default ItemScreen;
