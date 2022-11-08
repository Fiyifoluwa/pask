import React, { ReactNode } from 'react';

import { Platform, ScrollView, ViewStyle } from 'react-native';

interface IScrollViewH extends INavigationProps {
  children: ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

const ScrollViewH = ({
  children,
  style,
  contentContainerStyle,
}: IScrollViewH) => {
  return (
    <ScrollView
      style={{
        flexDirection: 'row',
        marginBottom: 24,
        ...style,
      }}
      // pagingEnabled
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
        ...contentContainerStyle,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewH;
