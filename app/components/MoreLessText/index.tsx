import { colors } from 'app/design/GlobalStyles';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IMoreLessText {
  truncated: string;
  full: string;
}

const MoreLessText = ({ truncated, full }: IMoreLessText) => {
  const [more, setMore] = useState(false);
  return (
    <Text
      style={{
        fontFamily: 'U8-Bold',
        fontSize: 16,
        lineHeight: 28,
        textAlign: 'center',
        alignItems: 'center',
        color: colors.darkPrimaryTextColor,
      }}
    >
      {!more ? `${truncated}...` : full}
      <TouchableOpacity onPress={() => setMore(!more)} activeOpacity={0.7}>
        <Text
          style={{
            fontFamily: 'U8-Bold',
            fontSize: 16,
            lineHeight: 28,
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: -10,
            color: colors.primaryColor,
          }}
        >
          {more ? 'Less' : 'More'}
        </Text>
      </TouchableOpacity>
    </Text>
  );
};

export default MoreLessText;
