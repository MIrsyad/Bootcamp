import React from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';
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

const CustomTextBtn = props => {
  return (
    <Text style={styles.customTextbtn} onPress={() => console.log('clicked')}>
      {props.text}
    </Text>
  );
};

const SvgImageLoader = props => {
  return <SvgXml xml={props.xmlFile} />;
};

const TextContent = props => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.subtitleStyle}>{props.subtitle}</Text>
    </View>
  );
};

const CustomStatusBar = props => {
  return (
    <StatusBar barStyle="dark-content" backgroundColor="white" hidden={false} />
  );
};

const CustomInput = props => {
  return (
    <TextInput
      style={styles.customInputContainer}
      placeholder={props.placeholder}></TextInput>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 15,
    margin: 8,
    height: 56,
    width: 343,
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
  titleStyle: {
    fontSize: 24,
    marginTop: 8,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 100,
  },
  subtitleStyle: {
    paddingBottom: 15,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 50,
    color: '#78746D',
    marginVertical: 8,
  },
  customInputContainer: {
    marginVertical: 8,
    borderRadius: 10,
    borderColor: '#BEBAB3',
    borderWidth: 2,
    padding: 10,
    alignSelf: 'center',
    width: 343,
  },
  customTextbtn: {
    alignSelf: 'center',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },
});

export {
  CustomButton,
  Header,
  SvgImageLoader,
  CustomStatusBar,
  TextContent,
  CustomInput,
  CustomTextBtn,
};
