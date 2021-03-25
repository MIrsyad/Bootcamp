import React from 'react';
import {View, Text} from 'react-native';
import {BackButton} from '@components/Reusable';

export default function Profile({navigation}) {
  return (
    <View>
      <BackButton />
      <Text>ini profile screen</Text>
    </View>
  );
}
