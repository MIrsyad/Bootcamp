import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
} from 'react-native';
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
      secureTextEntry={props.secure}
      onChangeText={props.onchangeText}
      style={styles.customInputContainer}
      placeholder={props.placeholder}></TextInput>
  );
};

const LoadingIndicator = props => {
  LoadingIndicator.defaultProps = {
    size: 'large',
    color: '#00ff00',
  };
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  );
};

const HeaderHome = props => {
  return (
    <View
      style={{flexDirection: 'row', marginHorizontal: 16, marginVertical: 6}}>
      <View style={{flex: 1}}>
        <View>
          <Text>Hello,</Text>
        </View>
        <View>
          <Text style={styles.headerUserName}>{props.name}</Text>
        </View>
      </View>
      <View>
        <View style={styles.circleContainer}>
          <SvgImageLoader xmlFile={props.xmlFile} />
        </View>
      </View>
    </View>
  );
};

const TagContainer = props => {
  return (
    <View
      style={{
        marginHorizontal: 8,
        paddingHorizontal: 11,
        paddingVertical: 3,
        borderRadius: 15,
        backgroundColor: Colors.blueButton,
      }}>
      <Text style={{color: 'white'}}>{props.text}</Text>
    </View>
  );
};

const Card = props => {
  Card.defaultProps = {
    color: '#F8F2EE',
  };
  return (
    <View style={{borderColor: '#BEBAB3', borderRadius: 10, borderWidth: 1,marginVertical:8}}>
      <View
        style={{
          paddingTop: 16,
          backgroundColor: props.color,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        }}>
        <SvgXml xml={props.xmlFile} />
        <View style={{flexDirection: 'row',paddingRight:16,paddingBottom:8}}>
          <View style={{flex: 1}} />
          <TagContainer text={props.price} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            color: Colors.greensuccess,
            fontSize: 12,
            marginVertical: 2,
            fontWeight: '500',
          }}>
          {props.duration}
        </Text>
        <Text style={{fontSize: 24, fontWeight: '500', marginVertical: 2}}>
          {props.title}
        </Text>
        <Text style={{marginTop: 2, marginBottom: 8}}>{props.subtitle}</Text>
      </View>
    </View>
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    marginTop: 8,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#BEBAB3',
  },
  headerUserName: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'stretch',
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
  LoadingIndicator,
  HeaderHome,
  TagContainer,
  Card,
};
