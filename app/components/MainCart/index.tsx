import React from 'react';
import { H } from 'app/design/typography';
import { View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { screenWidth } from 'app/design/responsiveModule';

interface IMainCart extends INavigationProps {}

const MainCart = ({ navigation }: IMainCart) => {
  return (
    <View style={GlobalStyles.wrapper}>
      <View
        style={{
          backgroundColor: colors.primaryColor,
          borderRadius: 24,
          width: screenWidth - 40,
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}
      >
        <View>
          <H
            text={'Cart'}
            fontSize={24}
            style={{ color: colors.white, marginBottom: 10 }}
          />
          <H text={'2 Items'} style={{ color: colors.white, opacity: 0.6 }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.orange,
              borderRadius: 99,
              marginLeft: 10,
            }}
          />
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.orange,
              borderRadius: 99,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MainCart;
