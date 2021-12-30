import * as React from 'react';
import { StyleSheet } from 'react-native';

import { SMAcquiredStackScreenProps } from '../../navigation/types';
import { RegularText } from '../../components/UI/StyledText';
import { View } from '../../components/UI/Themed';

export default function SMAcquiredScreen({ navigation }: SMAcquiredStackScreenProps<'Acquired'>) {
  return (
    <View style={styles.container}>
      <RegularText>
        SMAcquiredScreen
      </RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
