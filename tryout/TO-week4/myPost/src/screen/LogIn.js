import React from 'react';
import {View, Text} from 'react-native';
import {
  SvgImageLoader,
  CustomButton,
  CustomTextBtn,
  TextContent,
  CustomInput,
} from '@components/Reusable';
import {
  LogInilustration,
  GoogleLogo,
  InstagramLogo,
  FacebookLogo,
} from '@components/Svg';

export default function LogIn() {
  return (
    <View style={{flex: 1}}>
      <View style={{alignSelf: 'center',marginTop:20}}>
        <SvgImageLoader xmlFile={LogInilustration} />
      </View>
      <TextContent title="Log in" subtitle="Login with social networks" />
      <View
        style={{
          flexDirection: 'row-reverse',
          alignSelf: 'center',
          marginBottom: 8,
        }}>
        <View style={{marginHorizontal: 6}}>
          <SvgImageLoader xmlFile={GoogleLogo} />
        </View>
        <View style={{marginHorizontal: 6}}>
          <SvgImageLoader xmlFile={InstagramLogo} />
        </View>
        <View style={{marginHorizontal: 6}}>
          <SvgImageLoader xmlFile={FacebookLogo} />
        </View>
      </View>
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomTextBtn text="Forgot Password?" />
      <CustomButton text="Log in" />
      <CustomTextBtn text="Sign up" />
    </View>
  );
}
