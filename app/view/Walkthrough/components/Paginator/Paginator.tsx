import React from 'react';
import Animated, { interpolateNode } from 'react-native-reanimated';
import { styles } from './styles';

interface PaginatorProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Paginator = ({ index, currentIndex }: PaginatorProps) => {
  const opacity = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  return <Animated.View style={{ ...styles.paginator, opacity }} />;
};

export default Paginator;
