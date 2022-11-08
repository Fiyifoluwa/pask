import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const isReadyRef = React.createRef<any>();

export const navigationRef = React.createRef<any>();

export function navigate(name?: any, params?: any) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function replace(...args: any) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function getCurentRoute() {
  return navigationRef.current?.getCurrentRoute().name;
}
