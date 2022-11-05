import { colors } from 'app/design/GlobalStyles';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Platform, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

interface IContainer {
  children: any;
  backgroundColor?: string;
  statusBarColor?: string;
}

const Container = ({
  children,
  backgroundColor,
  statusBarColor,
}: IContainer) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: backgroundColor
            ? backgroundColor
            : colors.primarySurface,
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={
            statusBarColor ? statusBarColor : colors.primarySurface
          }
        />

        <KeyboardAvoidingView
          {...{ ...(Platform.OS === 'ios' && { behavior: 'padding' }) }}
          enabled
          style={{ flex: 1 }}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Container;
