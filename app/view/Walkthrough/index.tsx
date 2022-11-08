import React, { useEffect } from 'react';
import { View } from 'react-native';
import { colors } from 'app/design/GlobalStyles';
import { getHeight, screenWidth } from 'app/design/responsiveModule';
import { Buttons, Container } from 'app/components';
import Animated, { divide } from 'react-native-reanimated';
import { useScrollHandler } from 'react-native-redash';
import { walkthroughs } from 'app/utils';
import Paginator from './components/Paginator/Paginator';
import { Logo } from 'app/assets/svg';
import { connect } from 'react-redux';
import { getCategoriesDispatcher } from 'app/redux/cart/dispatchers';
import WalkthroughItem from './components/WalkthroughItem';
import { styles } from './styles';

interface IWalkthrough extends INavigationProps {
  getCategories: () => void;
}

const Walkthrough = ({ navigation, getCategories }: IWalkthrough) => {
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
                <WalkthroughItem key={i} {...{ text, illustration }} />
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
            buttonStyle={{ ...styles.button, backgroundColor: colors.blue }}
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
            buttonStyle={styles.button}
            onPress={() => {}}
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
