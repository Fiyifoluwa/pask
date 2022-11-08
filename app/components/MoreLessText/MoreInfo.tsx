import React from 'react';
import { Text } from 'react-native';
import MoreLessText from '.';

interface IMoreInfo {
  fullText: string;
  linesToTruncate: number;
}

const MoreInfo = ({ fullText, linesToTruncate }: IMoreInfo) => {
  const [clippedText, setClippedText] = React.useState('');
  return clippedText ? (
    <MoreLessText truncated={clippedText} full={fullText} />
  ) : (
    <Text
      numberOfLines={linesToTruncate}
      ellipsizeMode={'tail'}
      onTextLayout={event => {
        //get all lines
        const { lines } = event.nativeEvent;
        //get lines after it truncate
        let text = lines
          .splice(0, linesToTruncate)
          .map(line => line.text)
          .join('');
        setClippedText(fullText.substr(0, text.length - 9));
      }}
    >
      {fullText}
    </Text>
  );
};

export default MoreInfo;
