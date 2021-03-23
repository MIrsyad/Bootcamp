import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Colors} from '@components/Colors';
import {xmlSplashScreen} from '@components/Svg';

const CustomButton = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
        <Text style={styles.CustomButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Header = props => {
  return (
    <View>
      <Text>ini header</Text>
    </View>
  );
};

const SvgImageLoader = props => {
  return (
    <View>
      <SvgXml xml={props.xmlFile} />
    </View>
  );
};

const CustomStatusBar = props => {
  return (
    <StatusBar barStyle="dark-content" backgroundColor="white" hidden={false} />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 32,
    height: 56,
    width: 311,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CustomButtonText: {
    color: 'white',
    fontSize: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export {CustomButton, Header, SvgImageLoader, CustomStatusBar};
