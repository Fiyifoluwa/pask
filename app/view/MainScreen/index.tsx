import React, { useEffect, useState } from 'react';
import {
  CategoryItem,
  Container,
  Input,
  MainCart,
  MealItem,
  ScrollViewH,
} from 'app/components';
import { H } from 'app/design/typography';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { AppState } from 'app/redux/types';
import { connect } from 'react-redux';
import { getCategoryItemsDispatcher } from 'app/redux/cart/dispatchers';
import { screenWidth } from 'app/design/responsiveModule';

interface IMainScreen extends INavigationProps {
  getCategoryItems: (category: string) => void;
  categories: any;
  categoryItems: any;
}

const MainScreen = ({
  navigation,
  getCategoryItems,
  categories,
  categoryItems,
}: IMainScreen) => {
  const [searchInput, setSearchInput] = useState<string>();
  const [searchCategory, setSearchCategory] = useState<string>(
    categories[0].strCategory,
  );

  useEffect(() => {
    getCategoryItems(searchCategory);
  }, [searchCategory]);

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ flex: 1, position: 'relative' }}
      >
        <View
          style={[
            GlobalStyles.wrapper,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            },
          ]}
        >
          <View>
            <H
              text={'Hi Fiyi'}
              fontSize={20}
              style={{ opacity: 0.5, marginBottom: 12 }}
            />
            <H text={'Hungry Now? 🔥'} fontSize={30} style={{}} />
          </View>
          <View
            style={{
              borderRadius: 99,
              backgroundColor: colors.primaryColor,
              height: 50,
              width: 50,
              alignSelf: 'flex-start',
            }}
          />
        </View>
        <View
          style={[
            GlobalStyles.wrapper,
            {
              marginBottom: 20,
            },
          ]}
        >
          <Input
            placeholder={'Search...'}
            value={searchInput}
            onChangeText={text => setSearchInput(text)}
          />
        </View>

        <ScrollViewH>
          {categories.map((item: any) => (
            <TouchableOpacity
              key={item.idCategory}
              onPress={() => {
                setSearchCategory(item.strCategory);
              }}
              activeOpacity={0.8}
            >
              <CategoryItem
                item={item}
                selected={searchCategory === item.strCategory}
              />
            </TouchableOpacity>
          ))}
        </ScrollViewH>

        <View
          style={[
            GlobalStyles.wrapper,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            },
          ]}
        >
          <H text={'Popular Items'} fontSize={24} style={{}} />
          <H text={'See all'} fontSize={16} style={{ opacity: 0.5 }} />
        </View>
        <ScrollViewH>
          {categoryItems.length ? (
            categoryItems.map((item: any) => (
              <TouchableOpacity
                key={item.idMeal}
                onPress={() => navigation?.navigate('ItemScreen', { item })}
              >
                <MealItem item={item} />
              </TouchableOpacity>
            ))
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                width: screenWidth - 40,
                flex: 1,
              }}
            >
              <ActivityIndicator size={'large'} />
            </View>
          )}
        </ScrollViewH>

        <View>
          <MainCart />
        </View>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    categories: state.cart.categories,
    categoryItems: state.cart.categoryItems,
  };
};

const mapDispatchToProps = {
  getCategoryItems: getCategoryItemsDispatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
