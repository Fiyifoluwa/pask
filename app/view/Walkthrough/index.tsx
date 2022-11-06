import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import Slide from './components/Slide';
import {
  getHeight,
  screenHeight,
  screenWidth,
} from 'app/design/responsiveModule';
import { Buttons, Container } from 'app/components';
import Animated, { divide } from 'react-native-reanimated';
import { useScrollHandler } from 'react-native-redash';
import { walkthroughs } from 'app/utils/data';
import Paginator from './components/Paginator';
import { Logo } from 'app/assets/svg';
import { connect } from 'react-redux';
import { getCategoriesDispatcher } from 'app/redux/cart/dispatchers';

interface IWalkthrough extends INavigationProps {
  getCategories: () => void;
}

export const useWalkthroughStyles = () => {
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      ...GlobalStyles.fillCenter,
      ...GlobalStyles.horizontalPadding,
    },
    slider: {
      // flex: 1,
      height: 0.45 * screenHeight,
      backgroundColor: colors.darkPrimaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pagination: {
      height: 10,
      flexDirection: 'row',
      // ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...GlobalStyles.horizontalPadding,
    },
  });
  return { styles };
};

const Walkthrough = ({ navigation, getCategories }: IWalkthrough) => {
  const { styles } = useWalkthroughStyles();
  const { scrollHandler, x } = useScrollHandler();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container
      statusBarColor={colors.darkPrimaryColor}
      backgroundColor={colors.darkPrimaryColor}
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center' }}>
          <Logo width={screenWidth * 0.45} height={getHeight(60)} />
        </View>

        <View style={styles.slider}>
          <View>
            <Animated.ScrollView
              horizontal
              snapToInterval={screenWidth}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              {...scrollHandler}
            >
              {walkthroughs.map(({ text, illustration }, i) => (
                <Slide key={i} {...{ text, illustration }} />
              ))}
            </Animated.ScrollView>
          </View>

          <View style={styles.pagination}>
            {walkthroughs.map((_, index) => (
              <Paginator
                key={index}
                currentIndex={divide(x, screenWidth)}
                {...{ index }}
              />
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Buttons
            variant="primary"
            buttonText="LOGIN"
            textColor={colors.white}
            buttonStyle={{
              backgroundColor: colors.blue,
              flex: 0.48,
              borderBottomLeftRadius: 3,
            }}
            textStyle={{ fontWeight: '600' }}
            onPress={() => {
              navigation?.reset({
                index: 0,
                routes: [{ name: 'MainScreen' }],
              });
            }}
          />
          <Buttons
            variant="outline"
            buttonText="REGISTER"
            textColor={colors.white}
            buttonStyle={{
              flex: 0.48,
              borderBottomLeftRadius: 2,
            }}
            textStyle={{ fontWeight: '600' }}
          />
        </View>
      </View>
    </Container>
  );
};

const mapDispatchToProps = {
  getCategories: getCategoriesDispatcher,
};
export default connect(undefined, mapDispatchToProps)(Walkthrough);
