import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { screenWidth } from 'app/design/responsiveModule';
import { colors } from 'app/design/GlobalStyles';
import { H } from 'app/design/typography';

interface ISlide {
  text: string;
  illustration: ReactNode;
}

const Slide = ({ text, illustration }: ISlide) => {
  return (
    <View
      style={{
        width: screenWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {illustration}
      <View style={{ maxWidth: screenWidth * 0.7 }}>
        <H
          {...{ text }}
          style={{
            color: colors.primaryButtontext,
            textAlign: 'center',
            fontWeight: '600',
            marginTop: 60,
          }}
        />
      </View>
    </View>
  );
};

export default Slide;
