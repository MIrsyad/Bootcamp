import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  SvgImageLoader,
  CustomButton,
  CustomTextBtn,
  TextContent,
  CustomInput,
} from '@components/Reusable';
import {SignUpIlustration, BackLogo} from '@components/Svg';

export default function SignUp() {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          marginTop: 8,
          width: 48,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 15,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#BEBAB3',
        }}>
        <SvgImageLoader xmlFile={BackLogo} />
      </TouchableOpacity>
      <View style={{alignSelf: 'center', marginTop: 0}}>
        <SvgImageLoader xmlFile={SignUpIlustration} />
      </View>
      <TextContent title="Sign Up" subtitle="Create your account" />
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomButton text="Sign up" />
      <CustomTextBtn text="Log in" />
    </View>
  );
}
