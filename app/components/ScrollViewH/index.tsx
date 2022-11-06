import React, { ReactNode } from 'react';

import { Platform, ScrollView } from 'react-native';

interface IScrollViewH extends INavigationProps {
  children: ReactNode;
}

const ScrollViewH = ({ children }: IScrollViewH) => {
  return (
    <ScrollView
      style={{
        flexDirection: 'row',
        marginBottom: 24,
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
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewH;
