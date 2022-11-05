import React from 'react';
import Animated, { interpolateNode } from 'react-native-reanimated';

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

  return (
    <Animated.View
      style={{
        backgroundColor: '#fff',
        width: 15,
        height: 3,
        borderRadius: 4,
        margin: 8,
        opacity,
        // transform: [{ scale }],
      }}
    />
  );
};

export default Paginator;
