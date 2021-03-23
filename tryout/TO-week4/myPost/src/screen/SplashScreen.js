import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {CustomButton, SvgImageLoader} from '@components/Reusable';
import {xmlSplashScreen} from '@components/Svg';

export default function splashscreen() {
  return (
    <View style={styles.centerContainer}>
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        hidden={false}
      /> */}
      <SvgImageLoader xmlFile={xmlSplashScreen} />
      <Text style={styles.text}>MyPost</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingVertical: 15,
    fontSize: 40,
  },
});
