import React, { useState } from 'react';
import { Buttons, Container, PriceItem } from 'app/components';
import { H } from 'app/design/typography';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { colors } from 'app/design/GlobalStyles';
import { priceItems } from 'app/utils';
import { styles } from './styles';
import ItemDetails from './components/ItemDetails';
import { AppStackScreenProps } from '../types';
import { CaretLeft, Heart, Minus, Plus } from 'app/assets/svg';
import MoreInfo from 'app/components/MoreLessText/MoreInfo';

type Props = AppStackScreenProps<'ItemScreen'>;

interface IItemScreen extends INavigationProps {}

const ItemScreen = ({ navigation, route }: Props & IItemScreen) => {
  const { item } = route?.params;
  const [selected, setSelected] = useState(priceItems[1].size);

  return (
    <Container
      statusBarColor={colors.primaryColor}
      backgroundColor={colors.primaryColor}
    >
      <View style={styles.whiteBackground} />

      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <CaretLeft width={20} height={20} fill={colors.white} />
        </TouchableOpacity>
        <Heart width={20} height={20} fill={colors.white} />
      </View>

      <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />

      <ItemDetails itemName={item.strMeal} />

      <View style={styles.pricesContainer}>
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

      <ScrollView style={styles.dietaryInfo}>
        <MoreInfo
          fullText="Melting cheese pizza making with Extra virgin olive oil, Cornmeal, beef/chicken, Tomato sauce (smooth or pureed), Firm mozza, 100 gm onion, 70 gm chopped capsicum. Extra virgin olive oil, Cornmeal, beef/chicken, Tomato sauce (smooth or pureed), Firm mozza, 100 gm onion, 70 gm chopped capsicum."
          linesToTruncate={2}
        />
      </ScrollView>

      <View style={styles.priceAndQuantity}>
        <View style={{ ...GlobalStyles.alignItemsRow }}>
          <H text={'Total:'} style={{ color: colors.black }} />
          <H text={' $'} style={{ color: colors.primaryColor }} />
          <H text={'12.99'} style={{ color: colors.black }} />
        </View>

        <View style={{ ...GlobalStyles.alignItemsRow }}>
          <View style={{ ...styles.quantityIcon, marginRight: 15 }}>
            <Plus width={9} height={9} fill={colors.disabledTextColor} />
          </View>

          <H text={'1'} style={{ color: colors.black }} />

          <View style={{ ...styles.quantityIcon, marginLeft: 15 }}>
            <Minus width={9} height={9} fill={colors.disabledTextColor} />
          </View>
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Buttons buttonText="Next" variant="primary" textColor={colors.white} />
      </View>
    </Container>
  );
};

export default ItemScreen;
