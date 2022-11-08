import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { screenWidth } from 'app/design/responsiveModule';
import { H } from 'app/design/typography';
import { styles } from './styles';

interface IWalkthroughItem {
  text: string;
  illustration: ReactNode;
}

const WalkthroughItem = ({ text, illustration }: IWalkthroughItem) => {
  return (
    <View style={styles.container}>
      {illustration}
      <View style={{ maxWidth: screenWidth * 0.7 }}>
        <H {...{ text }} fontSize={24} lineHeight={30} style={styles.text} />
      </View>
    </View>
  );
};

export default WalkthroughItem;
