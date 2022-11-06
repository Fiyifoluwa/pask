import React from 'react';
import { Buttons, CategoryItem, Container } from 'app/components';
import { H, P } from 'app/design/typography';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';

interface IItemScreen extends INavigationProps {}

const ItemScreen = ({ navigation }: IItemScreen) => {
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
          <H text={'back'} style={{ color: colors.white }} />
        </TouchableOpacity>
        <H text={'fav'} style={{ color: colors.white }} />
      </View>

      <View
        style={{
          backgroundColor: colors.orange,
          borderRadius: 99,
          height: 190,
          width: 190,
          alignSelf: 'center',
        }}
      />

      <View style={{ alignItems: 'center' }}>
        <H text={'Melting Cheese Pizza'} style={{ color: colors.black }} />
        <H text={'🍕 Pizza Italiano'} style={{ color: colors.black }} />
        <View style={{ ...GlobalStyles.alignItemsRow }}>
          <H text={'🕥 15 min'} style={{ color: colors.black }} />
          <H
            text={'●'}
            style={{ color: colors.black, opacity: 0.5, marginBottom: -5 }}
            fontSize={12}
          />
          <H text={'⭐️ 4.8 (2.2k reviews)'} style={{ color: colors.black }} />
          <H text={'  caret right'} style={{ color: colors.black }} />
        </View>
      </View>

      <View style={{ ...GlobalStyles.alignItemsRow, alignSelf: 'center' }}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </View>

      <View style={{ ...GlobalStyles.wrapper, alignSelf: 'center', flex: 1 }}>
        <P
          text={
            'hgjdvfgkdvkshgvdkshjgdavkdgavdkhagsdvsadghskdvsgdcsdsds ds dsgdkvsyudvskd sdsudjvlshjgdgvsldhjsvd sdskudvksdhjsd sdf def fd fd f df dfjkghdvfydgfbdfs fdhjfshjfbs fdfdfgblhfbs...More'
          }
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
