import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {
  SvgImageLoader,
  CustomButton,
  CustomTextBtn,
  TextContent,
  CustomInput,
  LoadingIndicator,
} from '@components/Reusable';
import {
  LogInilustration,
  GoogleLogo,
  InstagramLogo,
  FacebookLogo,
} from '@components/Svg';
import {postLogIn} from '../redux/global/action';
import {useDispatch, useSelector} from 'react-redux';

export default function LogIn({navigation}) {
  const [username, setUserName] = useState('irsyad');
  const [password, setPassword] = useState('irsyad');
  const dispatch = useDispatch();
  const {data, isLogin, loading} = useSelector(state => {
    return {
      data: state.global.data,
      isLogin: state.global.isLogin,
      loading: state.global.loading,
    };
  });

  useEffect(() => {
    console.log({data, isLogin, loading});
    if (data !== undefined) {
      console.log(data.data);
    }
  }, [data, isLogin, loading]);

  return (
    <View style={{flex: 1}}>
      {loading && <LoadingIndicator />}
      <View style={{alignSelf: 'center', marginTop: 20}}>
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
      <CustomInput
        onchangeText={username => setUserName(username)}
        placeholder="Username"
      />
      <CustomInput
        secure={true}
        onchangeText={password => setPassword(password)}
        placeholder="Password"
      />
      <CustomTextBtn text="Forgot Password?" />
      <CustomButton
        text="Log in"
        onPress={() => {
          console.log('btn clicked', {username, password});
          dispatch(postLogIn(username, password));
        }}
      />
      <CustomTextBtn text="Sign up" />
    </View>
  );
}
