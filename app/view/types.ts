import { StackScreenProps } from '@react-navigation/stack';

export type AppStackParamList = {
  Walkthrough: undefined;
  MainScreen: undefined;
  ItemScreen: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;
