import React from 'react';
import { Walk1, Walk2, Walk3, Walk4 } from 'app/assets/svg';
import { screenWidth } from 'app/design/responsiveModule';

export const walkthroughs = [
  {
    text: 'Build your savings with ease & discipline',
    illustration: (
      <Walk1 width={screenWidth * 0.7} height={screenWidth * 0.7} />
    ),
  },
  {
    text: 'Invest with ease in verified opportunities',
    illustration: (
      <Walk2 width={screenWidth * 0.7} height={screenWidth * 0.7} />
    ),
  },
  {
    text: "Lock funds you don't want to be tempted to touch",
    illustration: (
      <Walk3 width={screenWidth * 0.7} height={screenWidth * 0.7} />
    ),
  },
  {
    text: 'Setup multiple savings goals and reach them',
    illustration: (
      <Walk4 width={screenWidth * 0.7} height={screenWidth * 0.7} />
    ),
  },
];
