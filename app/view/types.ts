import { StackScreenProps } from '@react-navigation/stack';
import { TCategoryItem } from 'app/types';

export type AppStackParamList = {
  Walkthrough: undefined;
  MainScreen: undefined;
  ItemScreen: { item: TCategoryItem };
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;
