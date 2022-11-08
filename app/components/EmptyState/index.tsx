import React from 'react';
import { P } from 'app/design/typography';
import { View } from 'react-native';
import { styles } from './styles';

interface IEmptyState {
  searchTerm: string;
}

const EmptyState = ({ searchTerm }: IEmptyState) => {
  return (
    <View style={styles.container}>
      {searchTerm !== '' ? (
        <P
          text={`We couldn't find any items with the term '${searchTerm}'.`}
          fontSize={16}
          lineHeight={28}
          textAlign={'center'}
        />
      ) : (
        <P
          text={"We couldn't find any items."}
          fontSize={16}
          lineHeight={28}
          textAlign={'center'}
        />
      )}
    </View>
  );
};

export default EmptyState;
