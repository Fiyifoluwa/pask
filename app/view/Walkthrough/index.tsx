import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import Slide from './components/Slide';
import { screenHeight, screenWidth } from 'app/design/responsiveModule';
import { H } from 'app/design/typography';
import { Buttons, Container } from 'app/components';
import Animated, { divide } from 'react-native-reanimated';
import { useScrollHandler } from 'react-native-redash';
import { walkthroughs } from 'app/utils/data';
import Paginator from './components/Paginator';

interface IWalkthrough extends INavigationProps {}

export const useWalkthroughStyles = () => {
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      ...GlobalStyles.fillCenter,
      ...GlobalStyles.horizontalPadding,
    },
    slider: {
      height: 0.75 * screenHeight,
      backgroundColor: 'black',
    },
    footer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...GlobalStyles.horizontalPadding,
    },
    pagination: {
      height: 10,
      flexDirection: 'row',
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return { styles };
};

const Walkthrough = ({ navigation }: IWalkthrough) => {
  const { styles } = useWalkthroughStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  return (
    <Container statusBarColor={colors.black} backgroundColor={colors.black}>
      <Animated.View style={styles.slider}>
        <H text={'piggyvest'} style={{ color: 'blue', textAlign: 'center' }} />
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
      </Animated.View>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.pagination}>
          {walkthroughs.map((_, index) => (
            <Paginator
              key={index}
              currentIndex={divide(x, screenWidth)}
              {...{ index }}
            />
          ))}
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

export default Walkthrough;
