import { StackScreenProps } from '@react-navigation/stack';

export type AppStackParamList = {
  Walkthrough: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;
