import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Card, LoginButton} from '../component/reusable';
import {
  useEmailValidation,
  usePasswordValidation,
  useNameValidation,
} from '../lib/index';

export default function SignUp({navigation, route}) {
  const [email, setEmail] = useState();
  const [nama, setNama] = useState();
  const [password, setPassword] = useState();
  const [isValidEmail, setTextEmail] = useEmailValidation();
  const [isValidPassword, setTextPassword] = usePasswordValidation();
  const [isvalidName, setTextName] = useNameValidation();

  let data = route.params;

  function signup() {
    console.log(data);
    let currentData = data;
    if (email !== null && password !== null && nama !== null) {
      console.log('data terisi');
      const dataRegister = {
        email: email,
        first_name: nama,
        password: password,
      };
      currentData.push(dataRegister);
      const dataDitambahString = JSON.stringify(currentData);
      AsyncStorage.setItem('user_data', dataDitambahString);
      console.log('data ditambahkan');
      console.log({currentData});
      navigation.navigate('LandingScreen');
    } else {
      alert('data harap diisi');
    }
  }

  // function validating(type) {
  //     if (email.includes('@') && email.includes('.com')) {
  //         if (password.length > 5) {
  //             return true
  //         } else {
  //             alert('Passwrod length min 6')
  //         }
  //     } else {
  //         alert('email is not valid')
  //     }
  // }

  return (
    <View style={{flex: 1}}>
      <Header
        backpressed={() => navigation.navigate('LandingScreen')}
        back="Back"
        title="Sign Up"></Header>
      <Card
        onChangeText={(email) => {
          setEmail(email);
          setTextEmail(email);
        }}
        placeholder="Email"
      />
      {!isValidEmail ? (
        <Text style={style.alertStyle}>invalid Email</Text>
      ) : null}
      <Card
        onChangeText={(nama) => {
          setNama(nama);
          setTextName(nama);
        }}
        placeholder="first name"
      />
      {!isvalidName ? <Text style={style.alertStyle}>invalid Name</Text> : null}
      <Card
        onChangeText={(password) => {
          setPassword(password);
          setTextPassword(password);
        }}
        placeholder="Password"
        secure={true}
      />
      {!isValidPassword ? (
        <Text style={style.alertStyle}>password length min 6</Text>
      ) : null}
      <View style={style.loginButton}>
        <LoginButton
          disabled={!isValidEmail || !isValidPassword || !isvalidName}
          onpress={() => {
            if (email == null || password == null || nama == null) {
              alert('harap isi data');
            } else {
              signup();
            }
          }}
          btnName="Sign Up"
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
  alertStyle: {
    color: 'red',
    paddingStart: 10,
  },
});
