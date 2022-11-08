import React from 'react';
import { H } from 'app/design/typography';
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import CartItem from '../CartItem';
import { styles } from './styles';
import { TCartItem } from 'app/types';
import { clearCartDispatcher } from 'app/redux/cart/dispatchers';
import { connect } from 'react-redux';
import CartHandle from '../CartHandle';
import { screenWidth } from 'app/design/responsiveModule';

interface IMainCart {
  cart: TCartItem[] | null;
  clearCart: () => void;
}

const MainCart = ({ cart, clearCart }: IMainCart) => {
  // layout animations code block
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <View
      style={[styles.container, { minHeight: cart?.length > 0 ? 100 : 50 }]}
    >
      <View
        style={{ position: 'absolute', top: -8, left: screenWidth / 2 - 70 }}
      >
        <CartHandle />
      </View>
      <View
        style={{
          flexDirection: cart?.length > 0 ? 'column' : 'row',
          alignItems: cart?.length > 0 ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          width: cart?.length > 0 ? 100 : '100%',
        }}
      >
        <H
          text={'Cart'}
          fontSize={24}
          style={{
            ...styles.cartText,
            marginBottom: cart?.length > 0 ? 10 : 0,
          }}
        />
        {cart?.length === undefined ||
        cart.length === null ||
        cart.length < 1 ? (
          <H text={'Empty'} style={styles.itemsText} />
        ) : (
          <H
            text={`${cart.length} ${cart?.length === 1 ? 'Item' : 'Items'}`}
            style={styles.itemsText}
          />
        )}
      </View>
      {cart?.length > 0 && (
        <View style={styles.hscrollContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
            bounces={false}
          >
            {cart?.map(item => (
              <CartItem key={item.idMeal} item={item} />
            ))}
            {cart?.length > 0 && (
              <TouchableOpacity
                style={styles.clearCartBtn}
                activeOpacity={0.6}
                onPress={() => clearCart()}
              >
                <H text={'clear'} style={styles.clearCartText} />
                <H text={'cart'} style={styles.clearCartText} />
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = {
  clearCart: clearCartDispatcher,
};

export default connect(undefined, mapDispatchToProps)(MainCart);
