import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Header,
  Card,
  LoginButton,
  LoadingIndicator,
} from '../component/reusable';
import {useEmailValidation, usePasswordValidation} from '../lib/index';
import {useUser} from '../Context/UserContext';

export default function SignUp({navigation, route}) {
  const [isValidEmail, setTextEmail] = useEmailValidation();
  const [username, setUsername] = useState();
  const [
    isValidPassword,
    textPassword,
    setTextPassword,
  ] = usePasswordValidation();
  const {login, isLogin} = useUser();

    // useEffect(() => {
    //     console.log('useEffect ',isLogin);
    // })

  return (
    <View style={{flex: 1}}>
      <Header
        backpressed={() => navigation.navigate('LandingScreen')}
        back="Back"
        title="Log In"></Header>
      <Card
        onChangeText={(username) => {
          setUsername(username);
        }}
        placeholder="Username"
      />
      <Card
        onChangeText={(password) => {
          setTextPassword(password);
        }}
        secure={true}
        placeholder="password"
      />
      <View style={style.loginButton}>
        <LoginButton
          onpress={async () => {
            await login(username, textPassword);
            console.log(isLogin);
            if (isLogin) {
              navigation.navigate('Home');
              console.log('berhasil login');
            } else {
              alert('data tidak ditemukan');
            }
          }}
          btnName="Log In"
        />
        <Text style={style.forgotStyle}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  loginButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  forgotStyle: {
    color: '#5DB075',
    alignSelf: 'center',
    padding: 16,
    fontSize: 16,
  },
});
