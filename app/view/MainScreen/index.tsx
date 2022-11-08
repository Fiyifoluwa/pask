import React, { useEffect, useMemo, useState } from 'react';
import {
  CategoryItem as CatItem,
  Container,
  EmptyState,
  Input,
  MainCart,
  MealItem,
  ScrollViewH,
} from 'app/components';
import { H } from 'app/design/typography';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { AppState } from 'app/redux/types';
import { connect } from 'react-redux';
import {
  addItemToCartDispatcher,
  getCategoryItemsDispatcher,
} from 'app/redux/cart/dispatchers';
import { styles } from './styles';
import { TCartItem, TCategory, TCategoryItem } from 'app/types';

interface IMainScreen extends INavigationProps {
  getCategoryItems: (category: string) => void;
  addItemToCart: (item: TCategoryItem) => void;
  categories: TCategory[] | null;
  categoryItems: TCategoryItem[] | null;
  cart: TCartItem[] | null;
}

const MainScreen = ({
  navigation,
  getCategoryItems,
  addItemToCart,
  categories,
  categoryItems,
  cart,
}: IMainScreen) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('Beef');

  useEffect(() => {
    getCategoryItems(searchCategory);
  }, [searchCategory]);

  const newCategories = useMemo(
    () =>
      categoryItems?.filter(
        d =>
          searchInput === '' ||
          d.strMeal.toLowerCase().includes(searchInput?.toLowerCase()),
      ),
    [categoryItems, searchInput],
  );

  console.log('new', newCategories);

  return (
    <Container>
      <View style={{ flex: 1, position: 'relative' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.mainScrollView}
        >
          <View style={styles.headerView}>
            <View>
              <H text={'Hi Fiyi'} fontSize={20} style={styles.nameText} />
              <H
                text={'Hungry Now? 🔥'}
                fontSize={30}
                style={{ color: colors.black }}
              />
            </View>

            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/30.jpg' }}
              style={styles.userImage}
            />
          </View>

          <View style={styles.searchContainer}>
            <Input
              placeholder={'Search...'}
              value={searchInput}
              onChangeText={text => setSearchInput(text)}
              rightIcon
              leftIcon
            />
          </View>

          <ScrollViewH>
            {categories?.map((item: TCategory) => (
              <TouchableOpacity
                key={item.idCategory}
                onPress={() => {
                  setSearchCategory(item.strCategory);
                }}
                activeOpacity={0.8}
              >
                <CatItem
                  item={item}
                  selected={searchCategory === item.strCategory}
                />
              </TouchableOpacity>
            ))}
          </ScrollViewH>

          <View style={styles.headerView}>
            <H
              text={'Popular Items'}
              fontSize={24}
              style={{ color: colors.black }}
            />
            <H
              text={'See all'}
              fontSize={16}
              style={{ opacity: 0.5, color: colors.black }}
            />
          </View>

          <ScrollViewH>
            {categoryItems?.length > 0 && newCategories?.length > 0 ? (
              newCategories?.map((item: TCategoryItem) => (
                <TouchableOpacity
                  key={item.idMeal}
                  onPress={() => navigation?.navigate('ItemScreen', { item })}
                  activeOpacity={0.7}
                >
                  <MealItem
                    item={item}
                    addItemToCart={() => addItemToCart(item)}
                  />
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.loadingView}>
                <EmptyState searchTerm={searchInput} />
              </View>
            )}
          </ScrollViewH>
        </ScrollView>
        <View
          style={{
            ...GlobalStyles.wrapper,
            ...GlobalStyles.lastFloat,
          }}
        >
          <MainCart cart={cart} />
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cart: state.cart.cart,
    categories: state.cart.categories,
    categoryItems: state.cart.categoryItems,
  };
};

const mapDispatchToProps = {
  getCategoryItems: getCategoryItemsDispatcher,
  addItemToCart: addItemToCartDispatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
