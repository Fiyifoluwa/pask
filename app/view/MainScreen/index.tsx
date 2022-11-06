import React, { useState } from 'react';
import {
  CategoryItem,
  Container,
  Input,
  MainCart,
  MealItem,
} from 'app/components';
import { H } from 'app/design/typography';
import { Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';

interface IMainScreen extends INavigationProps {}

const MainScreen = ({ navigation }: IMainScreen) => {
  const [searchInput, setSearchInput] = useState<string>();
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

        <ScrollView
          style={{
            flexDirection: 'row',
            marginBottom: 24,
          }}
          contentInset={{
            // for ios
            top: 0,
            left: 20,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            // for android
            paddingHorizontal: Platform.OS === 'android' ? 20 : 0,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ScrollView>

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
        <ScrollView
          style={{
            flexDirection: 'row',
            marginBottom: 20,
          }}
          contentInset={{
            // for ios
            top: 0,
            left: 20,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            // for android
            paddingHorizontal: Platform.OS === 'android' ? 20 : 0,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => navigation?.navigate('ItemScreen')}>
            <MealItem />
          </TouchableOpacity>
          <MealItem />
          <MealItem />
          <MealItem />
        </ScrollView>

        <View>
          <MainCart />
        </View>
      </ScrollView>
    </Container>
  );
};

export default MainScreen;
